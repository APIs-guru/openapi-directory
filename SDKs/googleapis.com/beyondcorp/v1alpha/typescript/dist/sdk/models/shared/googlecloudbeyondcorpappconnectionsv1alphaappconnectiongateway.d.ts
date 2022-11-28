import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    GcpRegionalMig = "GCP_REGIONAL_MIG"
}
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayInput extends SpeakeasyBase {
    appGateway?: string;
    type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum;
}
/**
 * Gateway represents a user facing component that serves as an entrance to enable connectivity.
**/
export declare class GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGateway extends SpeakeasyBase {
    appGateway?: string;
    ingressPort?: number;
    l7psc?: string;
    type?: GoogleCloudBeyondcorpAppconnectionsV1alphaAppConnectionGatewayTypeEnum;
    uri?: string;
}
