import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionProperties } from "./retentionproperties";
export declare class UpdateTableRequest extends SpeakeasyBase {
    databaseName: string;
    retentionProperties: RetentionProperties;
    tableName: string;
}
