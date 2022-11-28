import { SpeakeasyBase } from "../../../internal/utils";
import { ProtectiveEquipmentPerson } from "./protectiveequipmentperson";
import { ProtectiveEquipmentSummary } from "./protectiveequipmentsummary";
export declare class DetectProtectiveEquipmentResponse extends SpeakeasyBase {
    persons?: ProtectiveEquipmentPerson[];
    protectiveEquipmentModelVersion?: string;
    summary?: ProtectiveEquipmentSummary;
}
