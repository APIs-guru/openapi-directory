import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailoverState } from "./failoverstate";
import { GlobalClusterMember } from "./globalclustermember";



// GlobalCluster
/** 
 * A data type representing an Aurora global database.
**/
export class GlobalCluster extends SpeakeasyBase {
  @SpeakeasyMetadata()
  databaseName?: string;

  @SpeakeasyMetadata()
  deletionProtection?: boolean;

  @SpeakeasyMetadata()
  engine?: string;

  @SpeakeasyMetadata()
  engineVersion?: string;

  @SpeakeasyMetadata()
  failoverState?: FailoverState;

  @SpeakeasyMetadata()
  globalClusterArn?: string;

  @SpeakeasyMetadata()
  globalClusterIdentifier?: string;

  @SpeakeasyMetadata({ elemType: GlobalClusterMember })
  globalClusterMembers?: GlobalClusterMember[];

  @SpeakeasyMetadata()
  globalClusterResourceId?: string;

  @SpeakeasyMetadata()
  status?: string;

  @SpeakeasyMetadata()
  storageEncrypted?: boolean;
}
