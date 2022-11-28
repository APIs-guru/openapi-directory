import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetServiceGraphQueryParams extends SpeakeasyBase {
    nextToken?: string;
}
export declare class GetServiceGraphHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetServiceGraphRequestBody extends SpeakeasyBase {
    endTime: Date;
    groupArn?: string;
    groupName?: string;
    nextToken?: string;
    startTime: Date;
}
export declare class GetServiceGraphRequest extends SpeakeasyBase {
    queryParams: GetServiceGraphQueryParams;
    headers: GetServiceGraphHeaders;
    request: GetServiceGraphRequestBody;
}
export declare class GetServiceGraphResponse extends SpeakeasyBase {
    contentType: string;
    getServiceGraphResult?: shared.GetServiceGraphResult;
    invalidRequestException?: any;
    statusCode: number;
    throttledException?: any;
}
