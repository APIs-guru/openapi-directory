import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApigatewayTestIamPermissionsRequest
/** 
 * Request message for `TestIamPermissions` method.
**/
export class ApigatewayTestIamPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
