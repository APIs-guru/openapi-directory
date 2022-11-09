import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BulkDeleteAdsByListingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkDeleteAdsByListingIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkDeleteAdsByListingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BulkDeleteAdsByListingIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkDeleteAdRequest;

  @Metadata()
  security: BulkDeleteAdsByListingIdSecurity;
}


export class BulkDeleteAdsByListingIdResponse extends SpeakeasyBase {
  @Metadata()
  bulkDeleteAdResponse?: shared.BulkDeleteAdResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
