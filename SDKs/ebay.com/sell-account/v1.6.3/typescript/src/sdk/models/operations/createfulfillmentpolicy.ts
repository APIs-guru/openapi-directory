import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateFulfillmentPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateFulfillmentPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FulfillmentPolicyRequest;

  @SpeakeasyMetadata()
  security: CreateFulfillmentPolicySecurity;
}


export class CreateFulfillmentPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  setFulfillmentPolicyResponse?: shared.SetFulfillmentPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
