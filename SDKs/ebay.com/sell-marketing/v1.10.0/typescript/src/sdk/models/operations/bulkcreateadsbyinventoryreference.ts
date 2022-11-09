import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BulkCreateAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkCreateAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkCreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BulkCreateAdsByInventoryReferencePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateAdsByInventoryReferenceRequest;

  @Metadata()
  security: BulkCreateAdsByInventoryReferenceSecurity;
}


export class BulkCreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata()
  bulkCreateAdsByInventoryReferenceResponse?: shared.BulkCreateAdsByInventoryReferenceResponse;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
