import { SpeakeasyBase } from "../../../internal/utils";
import { MonthlyTransfer } from "./monthlytransfer";
import { InstancePortInfo } from "./instanceportinfo";
/**
 * Describes monthly data transfer rates and port information for an instance.
**/
export declare class InstanceNetworking extends SpeakeasyBase {
    monthlyTransfer?: MonthlyTransfer;
    ports?: InstancePortInfo[];
}
