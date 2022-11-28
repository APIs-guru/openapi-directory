import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateDedicatedIpPoolHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateDedicatedIpPoolRequestBody extends SpeakeasyBase {
    poolName: string;
    tags?: shared.Tag[];
}
export declare class CreateDedicatedIpPoolRequest extends SpeakeasyBase {
    headers: CreateDedicatedIpPoolHeaders;
    request: CreateDedicatedIpPoolRequestBody;
}
export declare class CreateDedicatedIpPoolResponse extends SpeakeasyBase {
    alreadyExistsException?: any;
    badRequestException?: any;
    concurrentModificationException?: any;
    contentType: string;
    createDedicatedIpPoolResponse?: Map<string, any>;
    limitExceededException?: any;
    statusCode: number;
    tooManyRequestsException?: any;
}
