import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpRegionalMig = "GCP_REGIONAL_MIG"
}
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export declare class GatewayInput extends SpeakeasyBase {
    type?: GatewayTypeEnum;
}
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export declare class Gateway extends SpeakeasyBase {
    type?: GatewayTypeEnum;
    uri?: string;
    userPort?: number;
}
