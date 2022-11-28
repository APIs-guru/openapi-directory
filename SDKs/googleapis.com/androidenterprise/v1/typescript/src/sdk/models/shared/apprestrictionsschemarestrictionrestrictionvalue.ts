import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum {
    Bool = "bool",
    String = "string",
    Integer = "integer",
    Choice = "choice",
    Multiselect = "multiselect",
    Hidden = "hidden",
    Bundle = "bundle",
    BundleArray = "bundleArray"
}


// AppRestrictionsSchemaRestrictionRestrictionValue
/** 
 * A typed value for the restriction.
**/
export class AppRestrictionsSchemaRestrictionRestrictionValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=valueBool" })
  valueBool?: boolean;

  @SpeakeasyMetadata({ data: "json, name=valueInteger" })
  valueInteger?: number;

  @SpeakeasyMetadata({ data: "json, name=valueMultiselect" })
  valueMultiselect?: string[];

  @SpeakeasyMetadata({ data: "json, name=valueString" })
  valueString?: string;
}
