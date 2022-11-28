import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostModifyClusterDbRevisionActionEnum {
    ModifyClusterDbRevision = "ModifyClusterDbRevision"
}
export declare enum PostModifyClusterDbRevisionVersionEnum {
    TwoThousandAndTwelve1201 = "2012-12-01"
}
export declare class PostModifyClusterDbRevisionQueryParams extends SpeakeasyBase {
    action: PostModifyClusterDbRevisionActionEnum;
    version: PostModifyClusterDbRevisionVersionEnum;
}
export declare class PostModifyClusterDbRevisionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyClusterDbRevisionRequest extends SpeakeasyBase {
    queryParams: PostModifyClusterDbRevisionQueryParams;
    headers: PostModifyClusterDbRevisionHeaders;
    request?: Uint8Array;
}
export declare class PostModifyClusterDbRevisionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
