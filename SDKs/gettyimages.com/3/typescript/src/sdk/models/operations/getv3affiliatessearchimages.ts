import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3AffiliatesSearchImagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=style" })
  style?: shared.AffiliateSearchStyleEnum;
}


export class GetV3AffiliatesSearchImagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3AffiliatesSearchImagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3AffiliatesSearchImagesQueryParams;

  @Metadata()
  headers: GetV3AffiliatesSearchImagesHeaders;
}


export class GetV3AffiliatesSearchImagesResponse extends SpeakeasyBase {
  @Metadata()
  affiliateImageSearchResponse?: shared.AffiliateImageSearchResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
