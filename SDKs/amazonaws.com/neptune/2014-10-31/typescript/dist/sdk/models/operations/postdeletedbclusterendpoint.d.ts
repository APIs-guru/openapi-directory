import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostDeleteDbClusterEndpointActionEnum {
    DeleteDbClusterEndpoint = "DeleteDBClusterEndpoint"
}
export declare enum PostDeleteDbClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostDeleteDbClusterEndpointQueryParams extends SpeakeasyBase {
    action: PostDeleteDbClusterEndpointActionEnum;
    version: PostDeleteDbClusterEndpointVersionEnum;
}
export declare class PostDeleteDbClusterEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostDeleteDbClusterEndpointRequest extends SpeakeasyBase {
    queryParams: PostDeleteDbClusterEndpointQueryParams;
    headers: PostDeleteDbClusterEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostDeleteDbClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
