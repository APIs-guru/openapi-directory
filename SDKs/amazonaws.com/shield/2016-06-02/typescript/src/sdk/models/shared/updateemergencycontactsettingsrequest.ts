import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmergencyContact } from "./emergencycontact";



export class UpdateEmergencyContactSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmergencyContactList", elemType: EmergencyContact })
  emergencyContactList?: EmergencyContact[];
}
