import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotDetails } from "./snapshotdetails";



export class ListApplicationSnapshotsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=SnapshotSummaries", elemType: SnapshotDetails })
  snapshotSummaries?: SnapshotDetails[];
}
