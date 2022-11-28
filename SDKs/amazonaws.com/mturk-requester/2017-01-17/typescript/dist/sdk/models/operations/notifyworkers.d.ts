import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum NotifyWorkersXAmzTargetEnum {
    MTurkRequesterServiceV20170117NotifyWorkers = "MTurkRequesterServiceV20170117.NotifyWorkers"
}
export declare class NotifyWorkersHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: NotifyWorkersXAmzTargetEnum;
}
export declare class NotifyWorkersRequest extends SpeakeasyBase {
    headers: NotifyWorkersHeaders;
    request: shared.NotifyWorkersRequest;
}
export declare class NotifyWorkersResponse extends SpeakeasyBase {
    contentType: string;
    notifyWorkersResponse?: shared.NotifyWorkersResponse;
    requestError?: any;
    serviceFault?: any;
    statusCode: number;
}
