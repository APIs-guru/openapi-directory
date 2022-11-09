import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliveryControlFrequencyCap } from "./deliverycontrolfrequencycap";


export class DeliveryControl extends SpeakeasyBase {
  @Metadata({ data: "json, name=creativeBlockingLevel" })
  creativeBlockingLevel?: string;

  @Metadata({ data: "json, name=deliveryRateType" })
  deliveryRateType?: string;

  @Metadata({ data: "json, name=frequencyCaps", elemType: shared.DeliveryControlFrequencyCap })
  frequencyCaps?: DeliveryControlFrequencyCap[];
}
