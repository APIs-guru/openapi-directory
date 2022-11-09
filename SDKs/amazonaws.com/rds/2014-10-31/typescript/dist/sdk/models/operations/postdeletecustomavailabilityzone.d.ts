import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteCustomAvailabilityZoneActionEnum {
    DeleteCustomAvailabilityZone = "DeleteCustomAvailabilityZone"
}
export declare enum PostDeleteCustomAvailabilityZoneVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteCustomAvailabilityZoneQueryParams extends SpeakeasyBase {
    action: PostDeleteCustomAvailabilityZoneActionEnum;
    version: PostDeleteCustomAvailabilityZoneVersionEnum;
}
export declare class PostDeleteCustomAvailabilityZoneHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteCustomAvailabilityZoneRequest extends SpeakeasyBase {
    queryParams: PostDeleteCustomAvailabilityZoneQueryParams;
    headers: PostDeleteCustomAvailabilityZoneHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteCustomAvailabilityZoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
