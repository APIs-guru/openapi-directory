import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartTestHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class StartTestRequestBody extends SpeakeasyBase {
    sourceServerIDs: string[];
    tags?: Map<string, string>;
}
export declare class StartTestRequest extends SpeakeasyBase {
    headers: StartTestHeaders;
    request: StartTestRequestBody;
}
export declare class StartTestResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    startTestResponse?: shared.StartTestResponse;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
