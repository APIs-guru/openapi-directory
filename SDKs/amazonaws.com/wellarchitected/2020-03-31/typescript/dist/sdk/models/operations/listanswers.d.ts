import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListAnswersPathParams extends SpeakeasyBase {
    lensAlias: string;
    workloadId: string;
}
export declare class ListAnswersQueryParams extends SpeakeasyBase {
    maxResults?: number;
    milestoneNumber?: number;
    nextToken?: string;
    pillarId?: string;
}
export declare class ListAnswersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListAnswersRequest extends SpeakeasyBase {
    pathParams: ListAnswersPathParams;
    queryParams: ListAnswersQueryParams;
    headers: ListAnswersHeaders;
}
export declare class ListAnswersResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listAnswersOutput?: shared.ListAnswersOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
