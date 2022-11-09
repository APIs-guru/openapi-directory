import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateReturnPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateReturnPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ReturnPolicyRequest;

  @Metadata()
  security: CreateReturnPolicySecurity;
}


export class CreateReturnPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  setReturnPolicyResponse?: shared.SetReturnPolicyResponse;

  @Metadata()
  statusCode: number;
}
