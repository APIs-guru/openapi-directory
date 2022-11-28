import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum {
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
 * A typed value for the restriction.
**/
export declare class AppRestrictionsSchemaRestrictionRestrictionValue extends SpeakeasyBase {
    type?: AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum;
    valueBool?: boolean;
    valueInteger?: number;
    valueMultiselect?: string[];
    valueString?: string;
}
