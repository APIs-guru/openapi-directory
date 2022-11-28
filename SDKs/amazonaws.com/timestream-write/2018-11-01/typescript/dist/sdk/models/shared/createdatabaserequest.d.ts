import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateDatabaseRequest extends SpeakeasyBase {
    databaseName: string;
    kmsKeyId?: string;
    tags?: Tag[];
}
