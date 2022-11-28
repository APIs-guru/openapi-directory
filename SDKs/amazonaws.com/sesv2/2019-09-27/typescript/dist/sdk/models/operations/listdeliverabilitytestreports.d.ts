import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListDeliverabilityTestReportsQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: number;
}
export declare class ListDeliverabilityTestReportsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListDeliverabilityTestReportsRequest extends SpeakeasyBase {
    queryParams: ListDeliverabilityTestReportsQueryParams;
    headers: ListDeliverabilityTestReportsHeaders;
}
export declare class ListDeliverabilityTestReportsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listDeliverabilityTestReportsResponse?: shared.ListDeliverabilityTestReportsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
