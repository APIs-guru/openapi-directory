import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCommandInvocationsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCommandInvocationsXAmzTargetEnum {
    AmazonSsmListCommandInvocations = "AmazonSSM.ListCommandInvocations"
}
export declare class ListCommandInvocationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCommandInvocationsXAmzTargetEnum;
}
export declare class ListCommandInvocationsRequest extends SpeakeasyBase {
    queryParams: ListCommandInvocationsQueryParams;
    headers: ListCommandInvocationsHeaders;
    request: shared.ListCommandInvocationsRequest;
}
export declare class ListCommandInvocationsResponse extends SpeakeasyBase {
    contentType: string;
    internalServerError?: any;
    invalidCommandId?: any;
    invalidFilterKey?: any;
    invalidInstanceId?: any;
    invalidNextToken?: any;
    listCommandInvocationsResult?: shared.ListCommandInvocationsResult;
    statusCode: number;
}
