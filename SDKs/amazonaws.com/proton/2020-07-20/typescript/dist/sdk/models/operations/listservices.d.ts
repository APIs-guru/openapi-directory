import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServicesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServicesXAmzTargetEnum {
    AwsProton20200720ListServices = "AwsProton20200720.ListServices"
}
export declare class ListServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServicesXAmzTargetEnum;
}
export declare class ListServicesRequest extends SpeakeasyBase {
    queryParams: ListServicesQueryParams;
    headers: ListServicesHeaders;
    request: shared.ListServicesInput;
}
export declare class ListServicesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listServicesOutput?: shared.ListServicesOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
