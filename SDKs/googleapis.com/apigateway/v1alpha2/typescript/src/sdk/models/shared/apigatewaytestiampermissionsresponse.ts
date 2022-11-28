import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ApigatewayTestIamPermissionsResponse
/** 
 * Response message for `TestIamPermissions` method.
**/
export class ApigatewayTestIamPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
