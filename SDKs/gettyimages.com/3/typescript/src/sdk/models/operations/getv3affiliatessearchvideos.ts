import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV3AffiliatesSearchVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phrase" })
  phrase?: string;
}


export class GetV3AffiliatesSearchVideosHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Accept-Language" })
  acceptLanguage?: string;
}


export class GetV3AffiliatesSearchVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV3AffiliatesSearchVideosQueryParams;

  @SpeakeasyMetadata()
  headers: GetV3AffiliatesSearchVideosHeaders;
}


export class GetV3AffiliatesSearchVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  affiliateVideoSearchResponse?: shared.AffiliateVideoSearchResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
