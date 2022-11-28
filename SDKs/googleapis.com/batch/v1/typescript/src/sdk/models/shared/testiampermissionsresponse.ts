import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TestIamPermissionsResponse
/** 
 * Response message for `TestIamPermissions` method.
**/
export class TestIamPermissionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
