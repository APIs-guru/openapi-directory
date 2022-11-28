import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayPolicy } from "./apigatewaypolicy";



// ApigatewaySetIamPolicyRequest
/** 
 * Request message for `SetIamPolicy` method.
**/
export class ApigatewaySetIamPolicyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: ApigatewayPolicy;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
