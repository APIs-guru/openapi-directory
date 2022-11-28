import { SpeakeasyBase } from "../../../internal/utils";
import { Database } from "./database";
export declare class ListDatabasesResponse extends SpeakeasyBase {
    databases?: Database[];
    nextToken?: string;
}
