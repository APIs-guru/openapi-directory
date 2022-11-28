import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateCustomAvailabilityZoneActionEnum {
    CreateCustomAvailabilityZone = "CreateCustomAvailabilityZone"
}
export declare enum PostCreateCustomAvailabilityZoneVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateCustomAvailabilityZoneQueryParams extends SpeakeasyBase {
    action: PostCreateCustomAvailabilityZoneActionEnum;
    version: PostCreateCustomAvailabilityZoneVersionEnum;
}
export declare class PostCreateCustomAvailabilityZoneHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateCustomAvailabilityZoneRequest extends SpeakeasyBase {
    queryParams: PostCreateCustomAvailabilityZoneQueryParams;
    headers: PostCreateCustomAvailabilityZoneHeaders;
    request?: Uint8Array;
}
export declare class PostCreateCustomAvailabilityZoneResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
