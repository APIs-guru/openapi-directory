import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BulkCreateAdsByListingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkCreateAdsByListingIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkCreateAdsByListingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BulkCreateAdsByListingIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateAdRequest;

  @SpeakeasyMetadata()
  security: BulkCreateAdsByListingIdSecurity;
}


export class BulkCreateAdsByListingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkAdResponse?: shared.BulkAdResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
