import { SpeakeasyBase } from "../../../internal/utils";
import { TunnelTypeEnum } from "./tunneltypeenum";
export declare class TunnelInfo extends SpeakeasyBase {
    tunnelDstAddress: string;
    tunnelSpecificData?: string;
    tunnelSrcAddress: string;
    tunnelType: TunnelTypeEnum;
}
