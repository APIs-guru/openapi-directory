import { SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchemaRestriction } from "./apprestrictionsschemarestriction";
/**
 * Represents the list of app restrictions available to be pre-configured for the product.
**/
export declare class AppRestrictionsSchema extends SpeakeasyBase {
    kind?: string;
    restrictions?: AppRestrictionsSchemaRestriction[];
}
