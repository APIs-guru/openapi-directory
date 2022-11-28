import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchemaRestrictionRestrictionValue } from "./apprestrictionsschemarestrictionrestrictionvalue";


export enum AppRestrictionsSchemaRestrictionRestrictionTypeEnum {
    Bool = "bool",
    String = "string",
    Integer = "integer",
    Choice = "choice",
    Multiselect = "multiselect",
    Hidden = "hidden",
    Bundle = "bundle",
    BundleArray = "bundleArray"
}


// AppRestrictionsSchemaRestriction
/** 
 * A restriction in the App Restriction Schema represents a piece of configuration that may be pre-applied.
**/
export class AppRestrictionsSchemaRestriction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: AppRestrictionsSchemaRestrictionRestrictionValue;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=entry" })
  entry?: string[];

  @SpeakeasyMetadata({ data: "json, name=entryValue" })
  entryValue?: string[];

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=nestedRestriction", elemType: AppRestrictionsSchemaRestriction })
  nestedRestriction?: AppRestrictionsSchemaRestriction[];

  @SpeakeasyMetadata({ data: "json, name=restrictionType" })
  restrictionType?: AppRestrictionsSchemaRestrictionRestrictionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
