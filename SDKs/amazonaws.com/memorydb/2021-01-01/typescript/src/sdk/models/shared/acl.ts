import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AclPendingChanges } from "./aclpendingchanges";


// Acl
/** 
 * An Access Control List. You can authenticate users with Access Contol Lists. ACLs enable you to control cluster access by grouping users. These Access control lists are designed as a way to organize access to clusters.
**/
export class Acl extends SpeakeasyBase {
  @Metadata({ data: "json, name=ARN" })
  arn?: string;

  @Metadata({ data: "json, name=Clusters" })
  clusters?: string[];

  @Metadata({ data: "json, name=MinimumEngineVersion" })
  minimumEngineVersion?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=PendingChanges" })
  pendingChanges?: AclPendingChanges;

  @Metadata({ data: "json, name=Status" })
  status?: string;

  @Metadata({ data: "json, name=UserNames" })
  userNames?: string[];
}
