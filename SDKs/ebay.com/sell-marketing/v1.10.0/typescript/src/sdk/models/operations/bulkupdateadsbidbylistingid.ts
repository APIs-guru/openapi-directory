import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BulkUpdateAdsBidByListingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkUpdateAdsBidByListingIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkUpdateAdsBidByListingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BulkUpdateAdsBidByListingIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateAdRequest;

  @Metadata()
  security: BulkUpdateAdsBidByListingIdSecurity;
}


export class BulkUpdateAdsBidByListingIdResponse extends SpeakeasyBase {
  @Metadata()
  bulkAdResponse?: shared.BulkAdResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
