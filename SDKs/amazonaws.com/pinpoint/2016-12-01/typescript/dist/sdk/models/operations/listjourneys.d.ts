import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListJourneysPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class ListJourneysQueryParams extends SpeakeasyBase {
    pageSize?: string;
    token?: string;
}
export declare class ListJourneysHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListJourneysRequest extends SpeakeasyBase {
    pathParams: ListJourneysPathParams;
    queryParams: ListJourneysQueryParams;
    headers: ListJourneysHeaders;
}
export declare class ListJourneysResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    forbiddenException?: any;
    internalServerErrorException?: any;
    listJourneysResponse?: shared.ListJourneysResponse;
    methodNotAllowedException?: any;
    notFoundException?: any;
    payloadTooLargeException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
