import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListServiceTemplatesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServiceTemplatesXAmzTargetEnum {
    AwsProton20200720ListServiceTemplates = "AwsProton20200720.ListServiceTemplates"
}
export declare class ListServiceTemplatesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceTemplatesXAmzTargetEnum;
}
export declare class ListServiceTemplatesRequest extends SpeakeasyBase {
    queryParams: ListServiceTemplatesQueryParams;
    headers: ListServiceTemplatesHeaders;
    request: shared.ListServiceTemplatesInput;
}
export declare class ListServiceTemplatesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listServiceTemplatesOutput?: shared.ListServiceTemplatesOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
