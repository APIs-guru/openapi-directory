import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TerminateTargetInstancesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class TerminateTargetInstancesRequestBody extends SpeakeasyBase {
    sourceServerIDs: string[];
    tags?: Map<string, string>;
}
export declare class TerminateTargetInstancesRequest extends SpeakeasyBase {
    headers: TerminateTargetInstancesHeaders;
    request: TerminateTargetInstancesRequestBody;
}
export declare class TerminateTargetInstancesResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    statusCode: number;
    terminateTargetInstancesResponse?: shared.TerminateTargetInstancesResponse;
    uninitializedAccountException?: any;
    validationException?: any;
}
