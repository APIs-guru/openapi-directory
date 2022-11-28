import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListQualificationTypesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListQualificationTypesXAmzTargetEnum {
    MTurkRequesterServiceV20170117ListQualificationTypes = "MTurkRequesterServiceV20170117.ListQualificationTypes"
}
export declare class ListQualificationTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListQualificationTypesXAmzTargetEnum;
}
export declare class ListQualificationTypesRequest extends SpeakeasyBase {
    queryParams: ListQualificationTypesQueryParams;
    headers: ListQualificationTypesHeaders;
    request: shared.ListQualificationTypesRequest;
}
export declare class ListQualificationTypesResponse extends SpeakeasyBase {
    contentType: string;
    listQualificationTypesResponse?: shared.ListQualificationTypesResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
