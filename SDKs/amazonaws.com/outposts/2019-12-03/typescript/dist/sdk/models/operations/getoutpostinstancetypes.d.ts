import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetOutpostInstanceTypesPathParams extends SpeakeasyBase {
    outpostId: string;
}
export declare class GetOutpostInstanceTypesQueryParams extends SpeakeasyBase {
    maxResults?: number;
    nextToken?: string;
}
export declare class GetOutpostInstanceTypesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetOutpostInstanceTypesRequest extends SpeakeasyBase {
    pathParams: GetOutpostInstanceTypesPathParams;
    queryParams: GetOutpostInstanceTypesQueryParams;
    headers: GetOutpostInstanceTypesHeaders;
}
export declare class GetOutpostInstanceTypesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    getOutpostInstanceTypesOutput?: shared.GetOutpostInstanceTypesOutput;
    internalServerException?: any;
    notFoundException?: any;
    statusCode: number;
    validationException?: any;
}
