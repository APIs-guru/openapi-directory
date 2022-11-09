import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyDbProxyTargetGroupActionEnum {
    ModifyDbProxyTargetGroup = "ModifyDBProxyTargetGroup"
}
export declare enum PostModifyDbProxyTargetGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbProxyTargetGroupQueryParams extends SpeakeasyBase {
    action: PostModifyDbProxyTargetGroupActionEnum;
    version: PostModifyDbProxyTargetGroupVersionEnum;
}
export declare class PostModifyDbProxyTargetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbProxyTargetGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyDbProxyTargetGroupQueryParams;
    headers: PostModifyDbProxyTargetGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbProxyTargetGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
