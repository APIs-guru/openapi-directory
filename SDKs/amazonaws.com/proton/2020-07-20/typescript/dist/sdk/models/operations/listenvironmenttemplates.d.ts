import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEnvironmentTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEnvironmentTemplatesXAmzTargetEnum {
    AwsProton20200720ListEnvironmentTemplates = "AwsProton20200720.ListEnvironmentTemplates"
}
export declare class ListEnvironmentTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentTemplatesXAmzTargetEnum;
}
export declare class ListEnvironmentTemplatesRequest extends SpeakeasyBase {
    queryParams: ListEnvironmentTemplatesQueryParams;
    headers: ListEnvironmentTemplatesHeaders;
    request: shared.ListEnvironmentTemplatesInput;
}
export declare class ListEnvironmentTemplatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listEnvironmentTemplatesOutput?: shared.ListEnvironmentTemplatesOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
