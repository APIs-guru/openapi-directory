import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CapacitySizeTypeEnum } from "./capacitysizetypeenum";



// CapacitySize
/** 
 * Currently, the <code>CapacitySize</code> API is not supported.
**/
export class CapacitySize extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type: CapacitySizeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value: number;
}
