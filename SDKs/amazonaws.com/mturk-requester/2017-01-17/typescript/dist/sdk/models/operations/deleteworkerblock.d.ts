import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWorkerBlockXAmzTargetEnum {
    MTurkRequesterServiceV20170117DeleteWorkerBlock = "MTurkRequesterServiceV20170117.DeleteWorkerBlock"
}
export declare class DeleteWorkerBlockHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkerBlockXAmzTargetEnum;
}
export declare class DeleteWorkerBlockRequest extends SpeakeasyBase {
    headers: DeleteWorkerBlockHeaders;
    request: shared.DeleteWorkerBlockRequest;
}
export declare class DeleteWorkerBlockResponse extends SpeakeasyBase {
    contentType: string;
    deleteWorkerBlockResponse?: Map<string, any>;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
