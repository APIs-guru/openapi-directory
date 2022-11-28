import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AclPendingChanges } from "./aclpendingchanges";



// Acl
/** 
 * An Access Control List. You can authenticate users with Access Contol Lists. ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.
**/
export class Acl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ARN" })
  arn?: string;

  @SpeakeasyMetadata({ data: "json, name=Clusters" })
  clusters?: string[];

  @SpeakeasyMetadata({ data: "json, name=MinimumEngineVersion" })
  minimumEngineVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=PendingChanges" })
  pendingChanges?: AclPendingChanges;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=UserNames" })
  userNames?: string[];
}
