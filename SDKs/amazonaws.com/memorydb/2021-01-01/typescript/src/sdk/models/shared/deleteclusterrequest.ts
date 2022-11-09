import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteClusterRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterName" })
  clusterName: string;

  @Metadata({ data: "json, name=FinalSnapshotName" })
  finalSnapshotName?: string;
}
