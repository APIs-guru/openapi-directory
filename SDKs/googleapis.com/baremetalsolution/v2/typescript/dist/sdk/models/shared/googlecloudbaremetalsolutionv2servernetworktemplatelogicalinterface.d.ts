import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum {
    InterfaceTypeUnspecified = "INTERFACE_TYPE_UNSPECIFIED",
    Bond = "BOND",
    Nic = "NIC"
}
/**
 * Logical interface.
**/
export declare class GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterface extends SpeakeasyBase {
    name?: string;
    required?: boolean;
    type?: GoogleCloudBaremetalsolutionV2ServerNetworkTemplateLogicalInterfaceTypeEnum;
}
