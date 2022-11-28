import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppRestrictionsSchemaRestriction } from "./apprestrictionsschemarestriction";



// AppRestrictionsSchema
/** 
 * Represents the list of app restrictions available to be pre-configured for the product.
**/
export class AppRestrictionsSchema extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=restrictions", elemType: AppRestrictionsSchemaRestriction })
  restrictions?: AppRestrictionsSchemaRestriction[];
}
