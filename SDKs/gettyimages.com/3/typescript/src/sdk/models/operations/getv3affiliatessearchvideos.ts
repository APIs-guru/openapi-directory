import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV3AffiliatesSearchVideosQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;
}


export class GetV3AffiliatesSearchVideosHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3AffiliatesSearchVideosRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV3AffiliatesSearchVideosQueryParams;

  @Metadata()
  headers: GetV3AffiliatesSearchVideosHeaders;
}


export class GetV3AffiliatesSearchVideosResponse extends SpeakeasyBase {
  @Metadata()
  affiliateVideoSearchResponse?: shared.AffiliateVideoSearchResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
