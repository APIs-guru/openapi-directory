import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class RetryDataReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class RetryDataReplicationRequestBody extends SpeakeasyBase {
    sourceServerId: string;
}
export declare class RetryDataReplicationRequest extends SpeakeasyBase {
    headers: RetryDataReplicationHeaders;
    request: RetryDataReplicationRequestBody;
}
export declare class RetryDataReplicationResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    sourceServer?: shared.SourceServer;
    statusCode: number;
    uninitializedAccountException?: any;
    validationException?: any;
}
