import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EmergencyContact } from "./emergencycontact";


export class UpdateEmergencyContactSettingsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=EmergencyContactList", elemType: shared.EmergencyContact })
  emergencyContactList?: EmergencyContact[];
}
