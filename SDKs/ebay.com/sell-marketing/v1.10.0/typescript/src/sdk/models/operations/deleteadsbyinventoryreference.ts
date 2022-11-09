import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteAdsByInventoryReferencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=campaign_id" })
  campaignId: string;
}


export class DeleteAdsByInventoryReferenceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DeleteAdsByInventoryReferenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteAdsByInventoryReferencePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteAdsByInventoryReferenceRequest;

  @Metadata()
  security: DeleteAdsByInventoryReferenceSecurity;
}


export class DeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
  @Metadata()
  adIds?: shared.AdIds;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
