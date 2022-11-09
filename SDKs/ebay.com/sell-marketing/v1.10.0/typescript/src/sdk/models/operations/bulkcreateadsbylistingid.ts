import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BulkCreateAdsByListingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkCreateAdsByListingIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkCreateAdsByListingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BulkCreateAdsByListingIdPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateAdRequest;

  @Metadata()
  security: BulkCreateAdsByListingIdSecurity;
}


export class BulkCreateAdsByListingIdResponse extends SpeakeasyBase {
  @Metadata()
  bulkAdResponse?: shared.BulkAdResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
