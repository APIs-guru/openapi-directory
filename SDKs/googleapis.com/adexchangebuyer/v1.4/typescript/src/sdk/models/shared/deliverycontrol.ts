import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryControlFrequencyCap } from "./deliverycontrolfrequencycap";



export class DeliveryControl extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeBlockingLevel" })
  creativeBlockingLevel?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryRateType" })
  deliveryRateType?: string;

  @SpeakeasyMetadata({ data: "json, name=frequencyCaps", elemType: DeliveryControlFrequencyCap })
  frequencyCaps?: DeliveryControlFrequencyCap[];
}
