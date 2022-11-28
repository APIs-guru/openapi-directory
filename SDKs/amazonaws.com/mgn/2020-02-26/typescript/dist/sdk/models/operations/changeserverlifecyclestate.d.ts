import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeServerLifeCycleStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
/**
 * The request to change the source server migration lifecycle state.
**/
export declare class ChangeServerLifeCycleStateRequestBodyLifeCycle extends SpeakeasyBase {
    state?: shared.ChangeServerLifeCycleStateSourceServerLifecycleStateEnum;
}
export declare class ChangeServerLifeCycleStateRequestBody extends SpeakeasyBase {
    lifeCycle: ChangeServerLifeCycleStateRequestBodyLifeCycle;
    sourceServerId: string;
}
export declare class ChangeServerLifeCycleStateRequest extends SpeakeasyBase {
    headers: ChangeServerLifeCycleStateHeaders;
    request: ChangeServerLifeCycleStateRequestBody;
}
export declare class ChangeServerLifeCycleStateResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    sourceServer?: shared.SourceServer;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
