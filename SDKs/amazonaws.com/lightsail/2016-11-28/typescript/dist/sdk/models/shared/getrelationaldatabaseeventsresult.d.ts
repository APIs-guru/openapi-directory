import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseEvent } from "./relationaldatabaseevent";
export declare class GetRelationalDatabaseEventsResult extends SpeakeasyBase {
    nextPageToken?: string;
    relationalDatabaseEvents?: RelationalDatabaseEvent[];
}
