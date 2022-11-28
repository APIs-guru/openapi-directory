import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSuppressedDestinationsQueryParams extends SpeakeasyBase {
    endDate?: Date;
    nextToken?: string;
    pageSize?: number;
    reason?: shared.SuppressionListReasonEnum[];
    startDate?: Date;
}
export declare class ListSuppressedDestinationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSuppressedDestinationsRequest extends SpeakeasyBase {
    queryParams: ListSuppressedDestinationsQueryParams;
    headers: ListSuppressedDestinationsHeaders;
}
export declare class ListSuppressedDestinationsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    invalidNextTokenException?: any;
    listSuppressedDestinationsResponse?: shared.ListSuppressedDestinationsResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
