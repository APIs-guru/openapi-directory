import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkforcesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListWorkforcesXAmzTargetEnum {
    SageMakerListWorkforces = "SageMaker.ListWorkforces"
}
export declare class ListWorkforcesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkforcesXAmzTargetEnum;
}
export declare class ListWorkforcesRequest extends SpeakeasyBase {
    queryParams: ListWorkforcesQueryParams;
    headers: ListWorkforcesHeaders;
    request: shared.ListWorkforcesRequest;
}
export declare class ListWorkforcesResponse extends SpeakeasyBase {
    contentType: string;
    listWorkforcesResponse?: shared.ListWorkforcesResponse;
    statusCode: number;
}
