import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateFulfillmentPolicySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class CreateFulfillmentPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FulfillmentPolicyRequest;

  @Metadata()
  security: CreateFulfillmentPolicySecurity;
}


export class CreateFulfillmentPolicyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  setFulfillmentPolicyResponse?: shared.SetFulfillmentPolicyResponse;

  @Metadata()
  statusCode: number;
}
