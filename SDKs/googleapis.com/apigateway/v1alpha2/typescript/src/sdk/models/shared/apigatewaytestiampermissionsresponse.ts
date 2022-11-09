import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ApigatewayTestIamPermissionsResponse
/** 
 * Response message for `TestIamPermissions` method.
**/
export class ApigatewayTestIamPermissionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=permissions" })
  permissions?: string[];
}
