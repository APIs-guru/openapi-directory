import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEnvironmentsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEnvironmentsXAmzTargetEnum {
    AwsProton20200720ListEnvironments = "AwsProton20200720.ListEnvironments"
}
export declare class ListEnvironmentsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentsXAmzTargetEnum;
}
export declare class ListEnvironmentsRequest extends SpeakeasyBase {
    queryParams: ListEnvironmentsQueryParams;
    headers: ListEnvironmentsHeaders;
    request: shared.ListEnvironmentsInput;
}
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listEnvironmentsOutput?: shared.ListEnvironmentsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
