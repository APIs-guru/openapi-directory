import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDeployablePatchSnapshotForInstanceResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Product" })
  product?: string;

  @Metadata({ data: "json, name=SnapshotDownloadUrl" })
  snapshotDownloadUrl?: string;

  @Metadata({ data: "json, name=SnapshotId" })
  snapshotId?: string;
}
