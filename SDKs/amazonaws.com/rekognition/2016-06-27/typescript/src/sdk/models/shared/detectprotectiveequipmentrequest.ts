import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Image } from "./image";
import { ProtectiveEquipmentSummarizationAttributes } from "./protectiveequipmentsummarizationattributes";


export class DetectProtectiveEquipmentRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Image" })
  image: Image;

  @Metadata({ data: "json, name=SummarizationAttributes" })
  summarizationAttributes?: ProtectiveEquipmentSummarizationAttributes;
}
