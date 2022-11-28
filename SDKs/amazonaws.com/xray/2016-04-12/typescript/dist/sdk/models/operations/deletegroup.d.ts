import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteGroupRequestBody extends SpeakeasyBase {
    groupArn?: string;
    groupName?: string;
}
export declare class DeleteGroupRequest extends SpeakeasyBase {
    headers: DeleteGroupHeaders;
    request: DeleteGroupRequestBody;
}
export declare class DeleteGroupResponse extends SpeakeasyBase {
    contentType: string;
    deleteGroupResult?: Map<string, any>;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
