import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApigatewayTestIamPermissionsRequest
/** 
 * Request message for `TestIamPermissions` method.
**/
export class ApigatewayTestIamPermissionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
