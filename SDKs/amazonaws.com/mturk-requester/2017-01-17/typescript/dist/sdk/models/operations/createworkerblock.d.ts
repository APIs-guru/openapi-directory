import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWorkerBlockXAmzTargetEnum {
    MTurkRequesterServiceV20170117CreateWorkerBlock = "MTurkRequesterServiceV20170117.CreateWorkerBlock"
}
export declare class CreateWorkerBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkerBlockXAmzTargetEnum;
}
export declare class CreateWorkerBlockRequest extends SpeakeasyBase {
    headers: CreateWorkerBlockHeaders;
    request: shared.CreateWorkerBlockRequest;
}
export declare class CreateWorkerBlockResponse extends SpeakeasyBase {
    contentType: string;
    createWorkerBlockResponse?: Map<string, any>;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
