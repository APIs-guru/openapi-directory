import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListMilestonesPathParams extends SpeakeasyBase {
    workloadId: string;
}
export declare class ListMilestonesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare class ListMilestonesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListMilestonesRequestBody extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListMilestonesRequest extends SpeakeasyBase {
    pathParams: ListMilestonesPathParams;
    queryParams: ListMilestonesQueryParams;
    headers: ListMilestonesHeaders;
    request: ListMilestonesRequestBody;
}
export declare class ListMilestonesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listMilestonesOutput?: shared.ListMilestonesOutput;
    resourceNotFoundException?: any;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
