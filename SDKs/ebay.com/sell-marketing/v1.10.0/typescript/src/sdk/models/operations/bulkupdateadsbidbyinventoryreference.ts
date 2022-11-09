import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BulkUpdateAdsBidByInventoryReferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkUpdateAdsBidByInventoryReferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkUpdateAdsBidByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BulkUpdateAdsBidByInventoryReferencePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateAdsByInventoryReferenceRequest;

  @Metadata()
  security: BulkUpdateAdsBidByInventoryReferenceSecurity;
}


export class BulkUpdateAdsBidByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata()
  bulkCreateAdsByInventoryReferenceResponse?: shared.BulkCreateAdsByInventoryReferenceResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
