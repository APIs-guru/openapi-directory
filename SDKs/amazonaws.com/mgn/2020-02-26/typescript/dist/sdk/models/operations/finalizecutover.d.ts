import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class FinalizeCutoverHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class FinalizeCutoverRequestBody extends SpeakeasyBase {
    sourceServerId: string;
}
export declare class FinalizeCutoverRequest extends SpeakeasyBase {
    headers: FinalizeCutoverHeaders;
    request: FinalizeCutoverRequestBody;
}
export declare class FinalizeCutoverResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    sourceServer?: shared.SourceServer;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
