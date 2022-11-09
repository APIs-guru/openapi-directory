import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum {
    Bool = "bool"
,    String = "string"
,    Integer = "integer"
,    Choice = "choice"
,    Multiselect = "multiselect"
,    Hidden = "hidden"
,    Bundle = "bundle"
,    BundleArray = "bundleArray"
}


// AppRestrictionsSchemaRestrictionRestrictionValue
/** 
 * A typed value for the restriction.
**/
export class AppRestrictionsSchemaRestrictionRestrictionValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=type" })
  type?: AppRestrictionsSchemaRestrictionRestrictionValueTypeEnum;

  @Metadata({ data: "json, name=valueBool" })
  valueBool?: boolean;

  @Metadata({ data: "json, name=valueInteger" })
  valueInteger?: number;

  @Metadata({ data: "json, name=valueMultiselect" })
  valueMultiselect?: string[];

  @Metadata({ data: "json, name=valueString" })
  valueString?: string;
}
