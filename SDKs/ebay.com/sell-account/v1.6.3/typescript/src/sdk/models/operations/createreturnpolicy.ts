import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateReturnPolicySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateReturnPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.ReturnPolicyRequest;

  @SpeakeasyMetadata()
  security: CreateReturnPolicySecurity;
}


export class CreateReturnPolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  setReturnPolicyResponse?: shared.SetReturnPolicyResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
