import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ContactInformation
/** 
 * Contains information on how a buyer or seller can be reached.
**/
export class ContactInformation extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
