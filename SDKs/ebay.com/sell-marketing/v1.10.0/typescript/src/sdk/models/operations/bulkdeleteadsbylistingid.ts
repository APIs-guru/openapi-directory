import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BulkDeleteAdsByListingIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkDeleteAdsByListingIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkDeleteAdsByListingIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BulkDeleteAdsByListingIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkDeleteAdRequest;

  @SpeakeasyMetadata()
  security: BulkDeleteAdsByListingIdSecurity;
}


export class BulkDeleteAdsByListingIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkDeleteAdResponse?: shared.BulkDeleteAdResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
