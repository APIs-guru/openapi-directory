import { SpeakeasyBase } from "../../../internal/utils";
import { Record } from "./record";
export declare class WriteRecordsRequest extends SpeakeasyBase {
    commonAttributes?: Record;
    databaseName: string;
    records: Record[];
    tableName: string;
}
