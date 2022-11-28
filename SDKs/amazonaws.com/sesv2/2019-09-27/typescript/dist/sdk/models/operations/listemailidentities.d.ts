import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListEmailIdentitiesQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: number;
}
export declare class ListEmailIdentitiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListEmailIdentitiesRequest extends SpeakeasyBase {
    queryParams: ListEmailIdentitiesQueryParams;
    headers: ListEmailIdentitiesHeaders;
}
export declare class ListEmailIdentitiesResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    listEmailIdentitiesResponse?: shared.ListEmailIdentitiesResponse;
    statusCode: number;
    tooManyRequestsException?: any;
}
