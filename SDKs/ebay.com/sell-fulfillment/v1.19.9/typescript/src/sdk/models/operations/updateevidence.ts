import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateEvidenceServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class UpdateEvidencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class UpdateEvidenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class UpdateEvidenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateEvidencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.UpdateEvidencePaymentDisputeRequest;

  @SpeakeasyMetadata()
  security: UpdateEvidenceSecurity;
}


export class UpdateEvidenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
