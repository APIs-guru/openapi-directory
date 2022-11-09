import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class CreateAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateAdsByInventoryReferencePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateAdsByInventoryReferenceRequest;

  @Metadata()
  security: CreateAdsByInventoryReferenceSecurity;
}


export class CreateAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata()
  adReferences?: shared.AdReferences;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
