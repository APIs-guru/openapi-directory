import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookupDetails
/** 
 * Details about a lookup column whose value comes from the associated relationship.
**/
export class LookupDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=relationshipColumn" })
  relationshipColumn?: string;

  @Metadata({ data: "json, name=relationshipColumnId" })
  relationshipColumnId?: string;
}
