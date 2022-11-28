import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListSitesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class ListSitesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ListSitesRequest extends SpeakeasyBase {
    queryParams: ListSitesQueryParams;
    headers: ListSitesHeaders;
}
export declare class ListSitesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    internalServerException?: any;
    listSitesOutput?: shared.ListSitesOutput;
    statusCode: number;
    validationException?: any;
}
