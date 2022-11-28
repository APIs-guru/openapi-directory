import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetCreateCustomAvailabilityZoneActionEnum {
    CreateCustomAvailabilityZone = "CreateCustomAvailabilityZone"
}
export declare enum GetCreateCustomAvailabilityZoneVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetCreateCustomAvailabilityZoneQueryParams extends SpeakeasyBase {
    action: GetCreateCustomAvailabilityZoneActionEnum;
    customAvailabilityZoneName: string;
    existingVpnId?: string;
    newVpnTunnelName?: string;
    version: GetCreateCustomAvailabilityZoneVersionEnum;
    vpnTunnelOriginatorIp?: string;
}
export declare class GetCreateCustomAvailabilityZoneHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetCreateCustomAvailabilityZoneRequest extends SpeakeasyBase {
    queryParams: GetCreateCustomAvailabilityZoneQueryParams;
    headers: GetCreateCustomAvailabilityZoneHeaders;
}
export declare class GetCreateCustomAvailabilityZoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
