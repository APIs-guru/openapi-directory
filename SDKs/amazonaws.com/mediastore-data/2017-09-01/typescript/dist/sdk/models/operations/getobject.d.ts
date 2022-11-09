import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetObjectPathParams extends SpeakeasyBase {
    path: string;
}
export declare class GetObjectHeaders extends SpeakeasyBase {
    range?: string;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetObjectRequest extends SpeakeasyBase {
    pathParams: GetObjectPathParams;
    headers: GetObjectHeaders;
}
export declare class GetObjectResponse extends SpeakeasyBase {
    containerNotFoundException?: any;
    contentType: string;
    getObjectResponse?: shared.GetObjectResponse;
    internalServerError?: any;
    objectNotFoundException?: any;
    requestedRangeNotSatisfiableException?: any;
    statusCode: number;
}
