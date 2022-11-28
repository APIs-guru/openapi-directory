import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkteamsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListWorkteamsXAmzTargetEnum {
    SageMakerListWorkteams = "SageMaker.ListWorkteams"
}
export declare class ListWorkteamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkteamsXAmzTargetEnum;
}
export declare class ListWorkteamsRequest extends SpeakeasyBase {
    queryParams: ListWorkteamsQueryParams;
    headers: ListWorkteamsHeaders;
    request: shared.ListWorkteamsRequest;
}
export declare class ListWorkteamsResponse extends SpeakeasyBase {
    contentType: string;
    listWorkteamsResponse?: shared.ListWorkteamsResponse;
    statusCode: number;
}
