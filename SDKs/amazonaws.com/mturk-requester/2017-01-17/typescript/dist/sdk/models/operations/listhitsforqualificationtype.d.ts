import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListHiTsForQualificationTypeQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListHiTsForQualificationTypeXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListHiTsForQualificationType = "MTurkRequesterServiceV20170117.ListHITsForQualificationType"
}
export declare class ListHiTsForQualificationTypeHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListHiTsForQualificationTypeXAmzTargetEnum;
}
export declare class ListHiTsForQualificationTypeRequest extends SpeakeasyBase {
    queryParams: ListHiTsForQualificationTypeQueryParams;
    headers: ListHiTsForQualificationTypeHeaders;
    request: shared.ListHiTsForQualificationTypeRequest;
}
export declare class ListHiTsForQualificationTypeResponse extends SpeakeasyBase {
    contentType: string;
    listHiTsForQualificationTypeResponse?: shared.ListHiTsForQualificationTypeResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
