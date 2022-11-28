import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookupDetails
/** 
 * Details about a lookup column whose value comes from the associated relationship.
**/
export class LookupDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=relationshipColumn" })
  relationshipColumn?: string;

  @SpeakeasyMetadata({ data: "json, name=relationshipColumnId" })
  relationshipColumnId?: string;
}
