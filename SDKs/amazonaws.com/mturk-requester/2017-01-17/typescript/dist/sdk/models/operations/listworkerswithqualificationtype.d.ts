import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListWorkersWithQualificationTypeQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListWorkersWithQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListWorkersWithQualificationType = "MTurkRequesterServiceV20170117.ListWorkersWithQualificationType"
}
export declare class ListWorkersWithQualificationTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListWorkersWithQualificationTypeXAmzTargetEnum;
}
export declare class ListWorkersWithQualificationTypeRequest extends SpeakeasyBase {
    queryParams: ListWorkersWithQualificationTypeQueryParams;
    headers: ListWorkersWithQualificationTypeHeaders;
    request: shared.ListWorkersWithQualificationTypeRequest;
}
export declare class ListWorkersWithQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    listWorkersWithQualificationTypeResponse?: shared.ListWorkersWithQualificationTypeResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
