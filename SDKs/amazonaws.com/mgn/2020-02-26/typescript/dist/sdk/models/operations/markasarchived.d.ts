import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MarkAsArchivedHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class MarkAsArchivedRequestBody extends SpeakeasyBase {
    sourceServerId: string;
}
export declare class MarkAsArchivedRequest extends SpeakeasyBase {
    headers: MarkAsArchivedHeaders;
    request: MarkAsArchivedRequestBody;
}
export declare class MarkAsArchivedResponse extends SpeakeasyBase {
    conflictException?: any;
    contentType: string;
    resourceNotFoundException?: any;
    sourceServer?: shared.SourceServer;
    statusCode: number;
    uninitializedAccountException?: any;
}
