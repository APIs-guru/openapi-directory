import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyCurrentDbClusterCapacityActionEnum {
    ModifyCurrentDbClusterCapacity = "ModifyCurrentDBClusterCapacity"
}
export declare enum PostModifyCurrentDbClusterCapacityVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyCurrentDbClusterCapacityQueryParams extends SpeakeasyBase {
    action: PostModifyCurrentDbClusterCapacityActionEnum;
    version: PostModifyCurrentDbClusterCapacityVersionEnum;
}
export declare class PostModifyCurrentDbClusterCapacityHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyCurrentDbClusterCapacityRequest extends SpeakeasyBase {
    queryParams: PostModifyCurrentDbClusterCapacityQueryParams;
    headers: PostModifyCurrentDbClusterCapacityHeaders;
    request?: Uint8Array;
}
export declare class PostModifyCurrentDbClusterCapacityResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
