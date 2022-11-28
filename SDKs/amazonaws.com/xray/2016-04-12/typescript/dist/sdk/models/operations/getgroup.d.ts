import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetGroupRequestBody extends SpeakeasyBase {
    groupArn?: string;
    groupName?: string;
}
export declare class GetGroupRequest extends SpeakeasyBase {
    headers: GetGroupHeaders;
    request: GetGroupRequestBody;
}
export declare class GetGroupResponse extends SpeakeasyBase {
    contentType: string;
    getGroupResult?: shared.GetGroupResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
