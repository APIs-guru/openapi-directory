import { SpeakeasyBase } from "../../../internal/utils";
import { InterfaceTypeEnum } from "./interfacetypeenum";
import { TunnelInfo } from "./tunnelinfo";
export declare class InterfaceDescriptor extends SpeakeasyBase {
    dstIpAddress?: string;
    dstMacAddress?: string;
    interfaceType: InterfaceTypeEnum;
    srcMacAddress?: string;
    tunnelInfo?: TunnelInfo;
}
