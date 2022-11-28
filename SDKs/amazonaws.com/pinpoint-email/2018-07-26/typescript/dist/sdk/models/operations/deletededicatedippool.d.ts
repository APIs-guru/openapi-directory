import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteDedicatedIpPoolPathParams extends SpeakeasyBase {
    poolName: string;
}
export declare class DeleteDedicatedIpPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class DeleteDedicatedIpPoolRequest extends SpeakeasyBase {
    pathParams: DeleteDedicatedIpPoolPathParams;
    headers: DeleteDedicatedIpPoolHeaders;
}
export declare class DeleteDedicatedIpPoolResponse extends SpeakeasyBase {
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    deleteDedicatedIpPoolResponse?: Map<string, any>;
    notFoundException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
