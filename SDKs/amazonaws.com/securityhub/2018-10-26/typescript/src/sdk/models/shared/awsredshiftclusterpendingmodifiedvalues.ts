import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterPendingModifiedValues
/** 
 * Changes to the Amazon Redshift cluster that are currently pending.
**/
export class AwsRedshiftClusterPendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutomatedSnapshotRetentionPeriod" })
  automatedSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterType" })
  clusterType?: string;

  @SpeakeasyMetadata({ data: "json, name=ClusterVersion" })
  clusterVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=EncryptionType" })
  encryptionType?: string;

  @SpeakeasyMetadata({ data: "json, name=EnhancedVpcRouting" })
  enhancedVpcRouting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaintenanceTrackName" })
  maintenanceTrackName?: string;

  @SpeakeasyMetadata({ data: "json, name=MasterUserPassword" })
  masterUserPassword?: string;

  @SpeakeasyMetadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @SpeakeasyMetadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;
}
