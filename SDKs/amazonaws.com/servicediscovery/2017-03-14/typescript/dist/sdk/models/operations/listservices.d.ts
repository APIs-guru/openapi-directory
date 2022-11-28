import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListServicesQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListServicesXAmzTargetEnum {
    Route53AutoNamingV20170314ListServices = "Route53AutoNaming_v20170314.ListServices"
}
export declare class ListServicesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListServicesXAmzTargetEnum;
}
export declare class ListServicesRequest extends SpeakeasyBase {
    queryParams: ListServicesQueryParams;
    headers: ListServicesHeaders;
    request: shared.ListServicesRequest;
}
export declare class ListServicesResponse extends SpeakeasyBase {
    contentType: string;
    invalidInput?: any;
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
}
