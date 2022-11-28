import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class CreateAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateAdsByInventoryReferencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CreateAdsByInventoryReferenceRequest;

  @SpeakeasyMetadata()
  security: CreateAdsByInventoryReferenceSecurity;
}


export class CreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  adReferences?: shared.AdReferences;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
