import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MonthlyTransfer } from "./monthlytransfer";
import { InstancePortInfo } from "./instanceportinfo";



// InstanceNetworking
/** 
 * Describes monthly data transfer rates and port information for an instance.
**/
export class InstanceNetworking extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=monthlyTransfer" })
  monthlyTransfer?: MonthlyTransfer;

  @SpeakeasyMetadata({ data: "json, name=ports", elemType: InstancePortInfo })
  ports?: InstancePortInfo[];
}
