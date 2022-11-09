import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SnapshotDetails } from "./snapshotdetails";


export class ListApplicationSnapshotsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SnapshotSummaries", elemType: shared.SnapshotDetails })
  snapshotSummaries?: SnapshotDetails[];
}
