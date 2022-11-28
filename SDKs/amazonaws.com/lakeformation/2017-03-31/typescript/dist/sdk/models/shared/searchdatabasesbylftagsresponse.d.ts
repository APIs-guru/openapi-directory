import { SpeakeasyBase } from "../../../internal/utils";
import { TaggedDatabase } from "./taggeddatabase";
export declare class SearchDatabasesByLfTagsResponse extends SpeakeasyBase {
    databaseList?: TaggedDatabase[];
    nextToken?: string;
}
