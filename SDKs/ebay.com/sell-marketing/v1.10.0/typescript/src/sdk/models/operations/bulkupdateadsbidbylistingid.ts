import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BulkUpdateAdsBidByListingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkUpdateAdsBidByListingIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkUpdateAdsBidByListingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BulkUpdateAdsBidByListingIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateAdRequest;

  @SpeakeasyMetadata()
  security: BulkUpdateAdsBidByListingIdSecurity;
}


export class BulkUpdateAdsBidByListingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkAdResponse?: shared.BulkAdResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
