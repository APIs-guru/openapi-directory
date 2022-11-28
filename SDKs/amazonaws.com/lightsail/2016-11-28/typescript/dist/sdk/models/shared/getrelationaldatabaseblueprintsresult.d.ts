import { SpeakeasyBase } from "../../../internal/utils";
import { RelationalDatabaseBlueprint } from "./relationaldatabaseblueprint";
export declare class GetRelationalDatabaseBlueprintsResult extends SpeakeasyBase {
    blueprints?: RelationalDatabaseBlueprint[];
    nextPageToken?: string;
}
