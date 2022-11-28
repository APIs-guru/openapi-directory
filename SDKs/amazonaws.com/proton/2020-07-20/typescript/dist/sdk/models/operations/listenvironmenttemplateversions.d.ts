import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEnvironmentTemplateVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListEnvironmentTemplateVersionsXAmzTargetEnum {
    AwsProton20200720ListEnvironmentTemplateVersions = "AwsProton20200720.ListEnvironmentTemplateVersions"
}
export declare class ListEnvironmentTemplateVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListEnvironmentTemplateVersionsXAmzTargetEnum;
}
export declare class ListEnvironmentTemplateVersionsRequest extends SpeakeasyBase {
    queryParams: ListEnvironmentTemplateVersionsQueryParams;
    headers: ListEnvironmentTemplateVersionsHeaders;
    request: shared.ListEnvironmentTemplateVersionsInput;
}
export declare class ListEnvironmentTemplateVersionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listEnvironmentTemplateVersionsOutput?: shared.ListEnvironmentTemplateVersionsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
