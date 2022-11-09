import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Rule } from "./rule";
/**
 * Collection
**/
export declare class Collection extends SpeakeasyBase {
    dollarId: string;
    dollarPermissions: Map<string, any>;
    dateCreated: number;
    dateUpdated: number;
    name: string;
    rules: Rule[];
}
