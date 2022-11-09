import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CapacitySizeTypeEnum } from "./capacitysizetypeenum";


// CapacitySize
/** 
 * Currently, the <code>CapacitySize</code> API is not supported.
**/
export class CapacitySize extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type: CapacitySizeTypeEnum;

  @Metadata({ data: "json, name=Value" })
  value: number;
}
