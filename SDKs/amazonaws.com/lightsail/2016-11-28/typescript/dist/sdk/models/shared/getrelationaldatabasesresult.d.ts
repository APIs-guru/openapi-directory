import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabase } from "./relationaldatabase";
export declare class GetRelationalDatabasesResult extends SpeakeasyBase {
    nextPageToken?: string;
    relationalDatabases?: RelationalDatabase[];
}
