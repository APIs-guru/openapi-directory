import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const AddEvidenceServerList = [
	"https://apiz.ebay.com{basePath}",
] as const;


export class AddEvidencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=payment_dispute_id" })
  paymentDisputeId: string;
}


export class AddEvidenceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class AddEvidenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: AddEvidencePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.AddEvidencePaymentDisputeRequest;

  @SpeakeasyMetadata()
  security: AddEvidenceSecurity;
}


export class AddEvidenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  addEvidencePaymentDisputeResponse?: shared.AddEvidencePaymentDisputeResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
