import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProtectiveEquipmentPerson } from "./protectiveequipmentperson";
import { ProtectiveEquipmentSummary } from "./protectiveequipmentsummary";


export class DetectProtectiveEquipmentResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Persons", elemType: shared.ProtectiveEquipmentPerson })
  persons?: ProtectiveEquipmentPerson[];

  @Metadata({ data: "json, name=ProtectiveEquipmentModelVersion" })
  protectiveEquipmentModelVersion?: string;

  @Metadata({ data: "json, name=Summary" })
  summary?: ProtectiveEquipmentSummary;
}
