import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The structure containing configurations related to insights.
**/
export declare class UpdateGroupRequestBodyInsightsConfiguration extends SpeakeasyBase {
    insightsEnabled?: boolean;
    notificationsEnabled?: boolean;
}
export declare class UpdateGroupRequestBody extends SpeakeasyBase {
    filterExpression?: string;
    groupArn?: string;
    groupName?: string;
    insightsConfiguration?: UpdateGroupRequestBodyInsightsConfiguration;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    headers: UpdateGroupHeaders;
    request: UpdateGroupRequestBody;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    contentType: string;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
    updateGroupResult?: shared.UpdateGroupResult;
}
