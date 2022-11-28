import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupHeaders extends SpeakeasyBase {
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
export declare class CreateGroupRequestBodyInsightsConfiguration extends SpeakeasyBase {
    insightsEnabled?: boolean;
    notificationsEnabled?: boolean;
}
export declare class CreateGroupRequestBody extends SpeakeasyBase {
    filterExpression?: string;
    groupName: string;
    insightsConfiguration?: CreateGroupRequestBodyInsightsConfiguration;
    tags?: shared.Tag[];
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    headers: CreateGroupHeaders;
    request: CreateGroupRequestBody;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    createGroupResult?: shared.CreateGroupResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
