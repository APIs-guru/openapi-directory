import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutDedicatedIpInPoolPathParams extends SpeakeasyBase {
    ip: string;
}
export declare class PutDedicatedIpInPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class PutDedicatedIpInPoolRequestBody extends SpeakeasyBase {
    destinationPoolName: string;
}
export declare class PutDedicatedIpInPoolRequest extends SpeakeasyBase {
    pathParams: PutDedicatedIpInPoolPathParams;
    headers: PutDedicatedIpInPoolHeaders;
    request: PutDedicatedIpInPoolRequestBody;
}
export declare class PutDedicatedIpInPoolResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    notFoundException?: any;
    putDedicatedIpInPoolResponse?: Map<string, any>;
    statusCode: number;
    tooManyRequestsException?: any;
}
