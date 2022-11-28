import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotDetails } from "./snapshotdetails";



export class DescribeApplicationSnapshotResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SnapshotDetails" })
  snapshotDetails: SnapshotDetails;
}
