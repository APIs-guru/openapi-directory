import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { ProtectiveEquipmentSummarizationAttributes } from "./protectiveequipmentsummarizationattributes";



export class DetectProtectiveEquipmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Image" })
  image: Image;

  @SpeakeasyMetadata({ data: "json, name=SummarizationAttributes" })
  summarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
}
