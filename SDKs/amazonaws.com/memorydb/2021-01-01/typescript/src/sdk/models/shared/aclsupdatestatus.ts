import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AcLsUpdateStatus
/** 
 * The status of the ACL update
**/
export class AcLsUpdateStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ACLToApply" })
  aclToApply?: string;
}
