import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDedicatedIpsQueryParams extends SpeakeasyBase {
    nextToken?: string;
    pageSize?: number;
    poolName?: string;
}
export declare class GetDedicatedIpsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDedicatedIpsRequest extends SpeakeasyBase {
    queryParams: GetDedicatedIpsQueryParams;
    headers: GetDedicatedIpsHeaders;
}
export declare class GetDedicatedIpsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDedicatedIpsResponse?: shared.GetDedicatedIpsResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
