import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SnapshotErrorMessage
/** 
 * Describes the errors returned by a snapshot.
**/
export class SnapshotErrorMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  failureCode?: string;

  @SpeakeasyMetadata()
  failureReason?: string;

  @SpeakeasyMetadata()
  snapshotClusterIdentifier?: string;

  @SpeakeasyMetadata()
  snapshotIdentifier?: string;
}
