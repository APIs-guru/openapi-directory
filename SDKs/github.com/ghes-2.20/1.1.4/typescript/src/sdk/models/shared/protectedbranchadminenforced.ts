import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ProtectedBranchAdminEnforced
/** 
 * Protected Branch Admin Enforced
**/
export class ProtectedBranchAdminEnforced extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=url" })
  url: string;
}
