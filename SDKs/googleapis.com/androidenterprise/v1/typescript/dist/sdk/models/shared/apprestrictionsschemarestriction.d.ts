import { SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchemaRestrictionRestrictionValue } from "./apprestrictionsschemarestrictionrestrictionvalue";
export declare enum AppRestrictionsSchemaRestrictionRestrictionTypeEnum {
    Bool = "bool",
    String = "string",
    Integer = "integer",
    Choice = "choice",
    Multiselect = "multiselect",
    Hidden = "hidden",
    Bundle = "bundle",
    BundleArray = "bundleArray"
}
/**
 * A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.
**/
export declare class AppRestrictionsSchemaRestriction extends SpeakeasyBase {
    defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue;
    description?: string;
    entry?: string[];
    entryValue?: string[];
    key?: string;
    nestedRestriction?: AppRestrictionsSchemaRestriction[];
    restrictionType?: AppRestrictionsSchemaRestrictionRestrictionTypeEnum;
    title?: string;
}
