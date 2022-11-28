import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ProtectedBranchAdminEnforced
/** 
 * Protected Branch Admin Enforced
**/
export class ProtectedBranchAdminEnforced extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}
