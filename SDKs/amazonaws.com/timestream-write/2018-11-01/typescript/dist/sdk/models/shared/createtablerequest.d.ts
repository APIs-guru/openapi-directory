import { SpeakeasyBase } from "../../../internal/utils";
import { RetentionProperties } from "./retentionproperties";
import { Tag } from "./tag";
export declare class CreateTableRequest extends SpeakeasyBase {
    databaseName: string;
    retentionProperties?: RetentionProperties;
    tableName: string;
    tags?: Tag[];
}
