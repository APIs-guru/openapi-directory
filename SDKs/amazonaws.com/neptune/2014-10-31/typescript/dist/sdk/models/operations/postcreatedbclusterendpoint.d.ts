import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostCreateDbClusterEndpointActionEnum {
    CreateDbClusterEndpoint = "CreateDBClusterEndpoint"
}
export declare enum PostCreateDbClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostCreateDbClusterEndpointQueryParams extends SpeakeasyBase {
    action: PostCreateDbClusterEndpointActionEnum;
    version: PostCreateDbClusterEndpointVersionEnum;
}
export declare class PostCreateDbClusterEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostCreateDbClusterEndpointRequest extends SpeakeasyBase {
    queryParams: PostCreateDbClusterEndpointQueryParams;
    headers: PostCreateDbClusterEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostCreateDbClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
