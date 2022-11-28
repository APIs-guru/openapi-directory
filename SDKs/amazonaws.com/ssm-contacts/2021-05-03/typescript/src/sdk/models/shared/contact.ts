import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContactTypeEnum } from "./contacttypeenum";



// Contact
/** 
 * A personal contact or escalation plan that Incident Manager engages during an incident.
**/
export class Contact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Alias" })
  alias: string;

  @SpeakeasyMetadata({ data: "json, name=ContactArn" })
  contactArn: string;

  @SpeakeasyMetadata({ data: "json, name=DisplayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: ContactTypeEnum;
}
