import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyDbClusterEndpointActionEnum {
    ModifyDbClusterEndpoint = "ModifyDBClusterEndpoint"
}
export declare enum PostModifyDbClusterEndpointVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbClusterEndpointQueryParams extends SpeakeasyBase {
    action: PostModifyDbClusterEndpointActionEnum;
    version: PostModifyDbClusterEndpointVersionEnum;
}
export declare class PostModifyDbClusterEndpointHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbClusterEndpointRequest extends SpeakeasyBase {
    queryParams: PostModifyDbClusterEndpointQueryParams;
    headers: PostModifyDbClusterEndpointHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbClusterEndpointResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
