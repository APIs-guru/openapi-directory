import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PendingModifiedValues
/** 
 * Describes cluster attributes that are in a pending state. A change to one or more the attributes was requested and is in progress or will be applied.
**/
export class PendingModifiedValues extends SpeakeasyBase {
  @SpeakeasyMetadata()
  automatedSnapshotRetentionPeriod?: number;

  @SpeakeasyMetadata()
  clusterIdentifier?: string;

  @SpeakeasyMetadata()
  clusterType?: string;

  @SpeakeasyMetadata()
  clusterVersion?: string;

  @SpeakeasyMetadata()
  encryptionType?: string;

  @SpeakeasyMetadata()
  enhancedVpcRouting?: boolean;

  @SpeakeasyMetadata()
  maintenanceTrackName?: string;

  @SpeakeasyMetadata()
  masterUserPassword?: string;

  @SpeakeasyMetadata()
  nodeType?: string;

  @SpeakeasyMetadata()
  numberOfNodes?: number;

  @SpeakeasyMetadata()
  publiclyAccessible?: boolean;
}
