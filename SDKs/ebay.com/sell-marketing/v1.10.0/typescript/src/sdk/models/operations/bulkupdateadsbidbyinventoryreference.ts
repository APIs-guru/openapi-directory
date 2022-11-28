import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BulkUpdateAdsBidByInventoryReferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkUpdateAdsBidByInventoryReferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkUpdateAdsBidByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BulkUpdateAdsBidByInventoryReferencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkCreateAdsByInventoryReferenceRequest;

  @SpeakeasyMetadata()
  security: BulkUpdateAdsBidByInventoryReferenceSecurity;
}


export class BulkUpdateAdsBidByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkCreateAdsByInventoryReferenceResponse?: shared.BulkCreateAdsByInventoryReferenceResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
