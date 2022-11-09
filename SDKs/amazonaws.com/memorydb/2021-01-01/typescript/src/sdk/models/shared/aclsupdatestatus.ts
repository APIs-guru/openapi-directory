import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AcLsUpdateStatus
/** 
 * The status of the ACL update
**/
export class AcLsUpdateStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ACLToApply" })
  aclToApply?: string;
}
