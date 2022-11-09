import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AppRestrictionsSchemaRestriction } from "./apprestrictionsschemarestriction";


// AppRestrictionsSchema
/** 
 * Represents the list of app restrictions available to be pre-configured for the product.
**/
export class AppRestrictionsSchema extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=restrictions", elemType: shared.AppRestrictionsSchemaRestriction })
  restrictions?: AppRestrictionsSchemaRestriction[];
}
