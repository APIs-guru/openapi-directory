import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContactTypeEnum } from "./contacttypeenum";


// Contact
/** 
 * A personal contact or escalation plan that Incident Manager engages during an incident.
**/
export class Contact extends SpeakeasyBase {
  @Metadata({ data: "json, name=Alias" })
  alias: string;

  @Metadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @Metadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @Metadata({ data: "json, name=Type" })
  type: ContactTypeEnum;
}
