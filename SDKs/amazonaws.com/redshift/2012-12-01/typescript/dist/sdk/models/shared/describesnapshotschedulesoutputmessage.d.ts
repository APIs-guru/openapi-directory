import { SpeakeasyBase } from "../../../internal/utils";
import { SnapshotSchedule } from "./snapshotschedule";
export declare class DescribeSnapshotSchedulesOutputMessage extends SpeakeasyBase {
    marker?: string;
    snapshotSchedules?: SnapshotSchedule[];
}
