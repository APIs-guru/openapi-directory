import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MonthlyTransfer } from "./monthlytransfer";
import { InstancePortInfo } from "./instanceportinfo";


// InstanceNetworking
/** 
 * Describes monthly data transfer rates and port information for an instance.
**/
export class InstanceNetworking extends SpeakeasyBase {
  @Metadata({ data: "json, name=monthlyTransfer" })
  monthlyTransfer?: MonthlyTransfer;

  @Metadata({ data: "json, name=ports", elemType: shared.InstancePortInfo })
  ports?: InstancePortInfo[];
}
