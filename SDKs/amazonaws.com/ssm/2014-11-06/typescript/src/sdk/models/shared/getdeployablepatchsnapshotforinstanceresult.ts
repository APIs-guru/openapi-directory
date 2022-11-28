import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDeployablePatchSnapshotForInstanceResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Product" })
  product?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotDownloadUrl" })
  snapshotDownloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;
}
