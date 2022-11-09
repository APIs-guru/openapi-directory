import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListFunctionsQueryParams extends SpeakeasyBase {
    marker?: string;
    maxItems?: number;
}
export declare class ListFunctionsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListFunctionsRequest extends SpeakeasyBase {
    queryParams: ListFunctionsQueryParams;
    headers: ListFunctionsHeaders;
}
export declare class ListFunctionsResponse extends SpeakeasyBase {
    contentType: string;
    listFunctionsResponse?: shared.ListFunctionsResponse;
    serviceException?: shared.ServiceException;
    statusCode: number;
}
