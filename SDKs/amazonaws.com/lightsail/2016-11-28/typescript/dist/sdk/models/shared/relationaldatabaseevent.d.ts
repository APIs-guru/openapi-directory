import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Describes an event for a database.
**/
export declare class RelationalDatabaseEvent extends SpeakeasyBase {
    createdAt?: Date;
    eventCategories?: string[];
    message?: string;
    resource?: string;
}
