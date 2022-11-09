import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterPendingModifiedValues
/** 
 * Changes to the Amazon Redshift cluster that are currently pending.
**/
export class AwsRedshiftClusterPendingModifiedValues extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutomatedSnapshotRetentionPeriod" })
  automatedSnapshotRetentionPeriod?: number;

  @Metadata({ data: "json, name=ClusterIdentifier" })
  clusterIdentifier?: string;

  @Metadata({ data: "json, name=ClusterType" })
  clusterType?: string;

  @Metadata({ data: "json, name=ClusterVersion" })
  clusterVersion?: string;

  @Metadata({ data: "json, name=EncryptionType" })
  encryptionType?: string;

  @Metadata({ data: "json, name=EnhancedVpcRouting" })
  enhancedVpcRouting?: boolean;

  @Metadata({ data: "json, name=MaintenanceTrackName" })
  maintenanceTrackName?: string;

  @Metadata({ data: "json, name=MasterUserPassword" })
  masterUserPassword?: string;

  @Metadata({ data: "json, name=NodeType" })
  nodeType?: string;

  @Metadata({ data: "json, name=NumberOfNodes" })
  numberOfNodes?: number;

  @Metadata({ data: "json, name=PubliclyAccessible" })
  publiclyAccessible?: boolean;
}
