import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BulkCreateAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkCreateAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkCreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BulkCreateAdsByInventoryReferencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateAdsByInventoryReferenceRequest;

  @SpeakeasyMetadata()
  security: BulkCreateAdsByInventoryReferenceSecurity;
}


export class BulkCreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkCreateAdsByInventoryReferenceResponse?: shared.BulkCreateAdsByInventoryReferenceResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
