import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppRestrictionsSchemaRestrictionRestrictionValue } from "./apprestrictionsschemarestrictionrestrictionvalue";
import { AppRestrictionsSchemaRestriction } from "./apprestrictionsschemarestriction";

export enum AppRestrictionsSchemaRestrictionRestrictionTypeEnum {
    Bool = "bool"
,    String = "string"
,    Integer = "integer"
,    Choice = "choice"
,    Multiselect = "multiselect"
,    Hidden = "hidden"
,    Bundle = "bundle"
,    BundleArray = "bundleArray"
}


// AppRestrictionsSchemaRestriction
/** 
 * A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.
**/
export class AppRestrictionsSchemaRestriction extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=entry" })
  entry?: string[];

  @Metadata({ data: "json, name=entryValue" })
  entryValue?: string[];

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=nestedRestriction", elemType: shared.AppRestrictionsSchemaRestriction })
  nestedRestriction?: AppRestrictionsSchemaRestriction[];

  @Metadata({ data: "json, name=restrictionType" })
  restrictionType?: AppRestrictionsSchemaRestrictionRestrictionTypeEnum;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
