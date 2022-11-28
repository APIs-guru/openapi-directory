import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListTerminologiesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListTerminologiesXAmzTargetEnum {
    AwsShineFrontendService20170701ListTerminologies = "AWSShineFrontendService_20170701.ListTerminologies"
}
export declare class ListTerminologiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListTerminologiesXAmzTargetEnum;
}
export declare class ListTerminologiesRequest extends SpeakeasyBase {
    queryParams: ListTerminologiesQueryParams;
    headers: ListTerminologiesHeaders;
    request: shared.ListTerminologiesRequest;
}
export declare class ListTerminologiesResponse extends SpeakeasyBase {
    contentType: string;
    internalServerException?: any;
    invalidParameterValueException?: any;
    listTerminologiesResponse?: shared.ListTerminologiesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
