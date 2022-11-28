import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServiceInstancesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServiceInstancesXAmzTargetEnum {
    AwsProton20200720ListServiceInstances = "AwsProton20200720.ListServiceInstances"
}
export declare class ListServiceInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServiceInstancesXAmzTargetEnum;
}
export declare class ListServiceInstancesRequest extends SpeakeasyBase {
    queryParams: ListServiceInstancesQueryParams;
    headers: ListServiceInstancesHeaders;
    request: shared.ListServiceInstancesInput;
}
export declare class ListServiceInstancesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listServiceInstancesOutput?: shared.ListServiceInstancesOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
