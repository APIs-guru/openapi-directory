import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordDetail } from "./recorddetail";
import { RecordOutput } from "./recordoutput";
export declare class DescribeRecordOutput extends SpeakeasyBase {
    nextPageToken?: string;
    recordDetail?: RecordDetail;
    recordOutputs?: RecordOutput[];
}
