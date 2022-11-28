import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteClusterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @SpeakeasyMetadata({ data: "json, name=FinalSnapshotName" })
  finalSnapshotName?: string;
}
