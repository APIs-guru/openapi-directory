import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProtectiveEquipmentPerson } from "./protectiveequipmentperson";
import { ProtectiveEquipmentSummary } from "./protectiveequipmentsummary";



export class DetectProtectiveEquipmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Persons", elemType: ProtectiveEquipmentPerson })
  persons?: ProtectiveEquipmentPerson[];

  @SpeakeasyMetadata({ data: "json, name=ProtectiveEquipmentModelVersion" })
  protectiveEquipmentModelVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=Summary" })
  summary?: ProtectiveEquipmentSummary;
}
