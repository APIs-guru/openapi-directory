import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartCutoverHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartCutoverRequestBody extends SpeakeasyBase {
    sourceServerIDs: string[];
    tags?: Map<string, string>;
}
export declare class StartCutoverRequest extends SpeakeasyBase {
    headers: StartCutoverHeaders;
    request: StartCutoverRequestBody;
}
export declare class StartCutoverResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    startCutoverResponse?: shared.StartCutoverResponse;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
