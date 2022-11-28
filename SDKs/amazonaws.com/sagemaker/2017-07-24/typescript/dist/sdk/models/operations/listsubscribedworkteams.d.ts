import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSubscribedWorkteamsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSubscribedWorkteamsXAmzTargetEnum {
    SageMakerListSubscribedWorkteams = "SageMaker.ListSubscribedWorkteams"
}
export declare class ListSubscribedWorkteamsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSubscribedWorkteamsXAmzTargetEnum;
}
export declare class ListSubscribedWorkteamsRequest extends SpeakeasyBase {
    queryParams: ListSubscribedWorkteamsQueryParams;
    headers: ListSubscribedWorkteamsHeaders;
    request: shared.ListSubscribedWorkteamsRequest;
}
export declare class ListSubscribedWorkteamsResponse extends SpeakeasyBase {
    contentType: string;
    listSubscribedWorkteamsResponse?: shared.ListSubscribedWorkteamsResponse;
    statusCode: number;
}
