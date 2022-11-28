import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { ProtectiveEquipmentSummarizationAttributes } from "./protectiveequipmentsummarizationattributes";
export declare class DetectProtectiveEquipmentRequest extends SpeakeasyBase {
    image: Image;
    summarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
}
