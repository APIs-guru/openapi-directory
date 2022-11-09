import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RecordDetail } from "./recorddetail";
export declare class ListRecordHistoryOutput extends SpeakeasyBase {
    nextPageToken?: string;
    recordDetails?: RecordDetail[];
}
