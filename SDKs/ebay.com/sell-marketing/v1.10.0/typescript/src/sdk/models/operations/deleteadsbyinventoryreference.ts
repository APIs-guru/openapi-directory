import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class DeleteAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteAdsByInventoryReferencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.DeleteAdsByInventoryReferenceRequest;

  @SpeakeasyMetadata()
  security: DeleteAdsByInventoryReferenceSecurity;
}


export class DeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adIds?: shared.AdIds;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
