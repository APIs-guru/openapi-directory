import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServiceTemplateVersionsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServiceTemplateVersionsXAmzTargetEnum {
    AwsProton20200720ListServiceTemplateVersions = "AwsProton20200720.ListServiceTemplateVersions"
}
export declare class ListServiceTemplateVersionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceTemplateVersionsXAmzTargetEnum;
}
export declare class ListServiceTemplateVersionsRequest extends SpeakeasyBase {
    queryParams: ListServiceTemplateVersionsQueryParams;
    headers: ListServiceTemplateVersionsHeaders;
    request: shared.ListServiceTemplateVersionsInput;
}
export declare class ListServiceTemplateVersionsResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listServiceTemplateVersionsOutput?: shared.ListServiceTemplateVersionsOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
