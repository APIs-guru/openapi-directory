import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListLensesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListLensesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListLensesRequest extends SpeakeasyBase {
    queryParams: ListLensesQueryParams;
    headers: ListLensesHeaders;
}
export declare class ListLensesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listLensesOutput?: shared.ListLensesOutput;
    statusCode: number;
    throttlingException?: any;
    validationException?: any;
}
