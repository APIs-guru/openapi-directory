import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListCandidatesForAutoMlJobQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListCandidatesForAutoMlJobXAmzTargetEnum {
    SageMakerListCandidatesForAutoMlJob = "SageMaker.ListCandidatesForAutoMLJob"
}
export declare class ListCandidatesForAutoMlJobHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListCandidatesForAutoMlJobXAmzTargetEnum;
}
export declare class ListCandidatesForAutoMlJobRequest extends SpeakeasyBase {
    queryParams: ListCandidatesForAutoMlJobQueryParams;
    headers: ListCandidatesForAutoMlJobHeaders;
    request: shared.ListCandidatesForAutoMlJobRequest;
}
export declare class ListCandidatesForAutoMlJobResponse extends SpeakeasyBase {
    contentType: string;
    listCandidatesForAutoMlJobResponse?: shared.ListCandidatesForAutoMlJobResponse;
    resourceNotFound?: any;
    statusCode: number;
}
