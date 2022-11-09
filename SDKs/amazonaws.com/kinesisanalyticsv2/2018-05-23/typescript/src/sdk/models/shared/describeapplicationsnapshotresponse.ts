import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SnapshotDetails } from "./snapshotdetails";


export class DescribeApplicationSnapshotResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=SnapshotDetails" })
  snapshotDetails: SnapshotDetails;
}
