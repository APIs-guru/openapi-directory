import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpRegionalMig = "GCP_REGIONAL_MIG"
}
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGateway extends SpeakeasyBase {
    appGateway?: string;
    ingressPort?: number;
    l7psc?: string;
    type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
    uri?: string;
}
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayInput extends SpeakeasyBase {
    appGateway?: string;
    type?: GoogleCloudBeyondcorpAppconnectionsV1AppConnectionGatewayTypeEnum;
}
