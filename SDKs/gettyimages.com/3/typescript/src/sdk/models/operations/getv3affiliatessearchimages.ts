import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3AffiliatesSearchImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=style" })
  style?: shared.AffiliateSearchStyleEnum;
}


export class GetV3AffiliatesSearchImagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3AffiliatesSearchImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3AffiliatesSearchImagesQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3AffiliatesSearchImagesHeaders;
}


export class GetV3AffiliatesSearchImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  affiliateImageSearchResponse?: shared.AffiliateImageSearchResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
