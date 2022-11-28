import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BulkDeleteAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class BulkDeleteAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class BulkDeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BulkDeleteAdsByInventoryReferencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.BulkDeleteAdsByInventoryReferenceRequest;

  @SpeakeasyMetadata()
  security: BulkDeleteAdsByInventoryReferenceSecurity;
}


export class BulkDeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  bulkDeleteAdsByInventoryReferenceResponse?: shared.BulkDeleteAdsByInventoryReferenceResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
