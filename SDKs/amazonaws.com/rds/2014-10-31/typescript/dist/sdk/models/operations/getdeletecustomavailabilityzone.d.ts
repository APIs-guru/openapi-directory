import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetDeleteCustomAvailabilityZoneActionEnum {
    DeleteCustomAvailabilityZone = "DeleteCustomAvailabilityZone"
}
export declare enum GetDeleteCustomAvailabilityZoneVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class GetDeleteCustomAvailabilityZoneQueryParams extends SpeakeasyBase {
    action: GetDeleteCustomAvailabilityZoneActionEnum;
    customAvailabilityZoneId: string;
    version: GetDeleteCustomAvailabilityZoneVersionEnum;
}
export declare class GetDeleteCustomAvailabilityZoneHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDeleteCustomAvailabilityZoneRequest extends SpeakeasyBase {
    queryParams: GetDeleteCustomAvailabilityZoneQueryParams;
    headers: GetDeleteCustomAvailabilityZoneHeaders;
}
export declare class GetDeleteCustomAvailabilityZoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
