import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EmergencyContact } from "./emergencycontact";



export class DescribeEmergencyContactSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=EmergencyContactList", elemType: EmergencyContact })
  emergencyContactList?: EmergencyContact[];
}
