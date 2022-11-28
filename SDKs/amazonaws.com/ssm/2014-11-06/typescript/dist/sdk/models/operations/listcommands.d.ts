import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCommandsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCommandsXAmzTargetEnum {
    AmazonSsmListCommands = "AmazonSSM.ListCommands"
}
export declare class ListCommandsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCommandsXAmzTargetEnum;
}
export declare class ListCommandsRequest extends SpeakeasyBase {
    queryParams: ListCommandsQueryParams;
    headers: ListCommandsHeaders;
    request: shared.ListCommandsRequest;
}
export declare class ListCommandsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidCommandId?: any;
    invalidFilterKey?: any;
    invalidInstanceId?: any;
    invalidNextToken?: any;
    listCommandsResult?: shared.ListCommandsResult;
    statusCode: number;
}
