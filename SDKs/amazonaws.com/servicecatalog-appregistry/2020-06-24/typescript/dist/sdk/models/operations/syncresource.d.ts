import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum SyncResourceResourceTypeEnum {
    CfnStack = "CFN_STACK"
}
export declare class SyncResourcePathParams extends SpeakeasyBase {
    resource: string;
    resourceType: SyncResourceResourceTypeEnum;
}
export declare class SyncResourceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class SyncResourceRequest extends SpeakeasyBase {
    pathParams: SyncResourcePathParams;
    headers: SyncResourceHeaders;
}
export declare class SyncResourceResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    internalServerException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    syncResourceResponse?: shared.SyncResourceResponse;
}
