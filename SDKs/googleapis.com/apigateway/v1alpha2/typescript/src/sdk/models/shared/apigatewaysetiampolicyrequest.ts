import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ApigatewayPolicy } from "./apigatewaypolicy";


// ApigatewaySetIamPolicyRequest
/** 
 * Request message for `SetIamPolicy` method.
**/
export class ApigatewaySetIamPolicyRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=policy" })
  policy?: ApigatewayPolicy;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
