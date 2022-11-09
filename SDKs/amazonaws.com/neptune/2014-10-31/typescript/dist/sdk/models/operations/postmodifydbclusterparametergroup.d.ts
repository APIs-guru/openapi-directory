import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum PostModifyDbClusterParameterGroupActionEnum {
    ModifyDbClusterParameterGroup = "ModifyDBClusterParameterGroup"
}
export declare enum PostModifyDbClusterParameterGroupVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class PostModifyDbClusterParameterGroupQueryParams extends SpeakeasyBase {
    action: PostModifyDbClusterParameterGroupActionEnum;
    version: PostModifyDbClusterParameterGroupVersionEnum;
}
export declare class PostModifyDbClusterParameterGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PostModifyDbClusterParameterGroupRequest extends SpeakeasyBase {
    queryParams: PostModifyDbClusterParameterGroupQueryParams;
    headers: PostModifyDbClusterParameterGroupHeaders;
    request?: Uint8Array;
}
export declare class PostModifyDbClusterParameterGroupResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
