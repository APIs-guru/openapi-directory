import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDedicatedIpPathParams extends SpeakeasyBase {
    ip: string;
}
export declare class GetDedicatedIpHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetDedicatedIpRequest extends SpeakeasyBase {
    pathParams: GetDedicatedIpPathParams;
    headers: GetDedicatedIpHeaders;
}
export declare class GetDedicatedIpResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getDedicatedIpResponse?: shared.GetDedicatedIpResponse;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
