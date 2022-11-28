import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SnapshotSchedule } from "./snapshotschedule";



export class DescribeSnapshotSchedulesOutputMessage extends SpeakeasyBase {
  @SpeakeasyMetadata()
  marker?: string;

  @SpeakeasyMetadata({ elemType: SnapshotSchedule })
  snapshotSchedules?: SnapshotSchedule[];
}
