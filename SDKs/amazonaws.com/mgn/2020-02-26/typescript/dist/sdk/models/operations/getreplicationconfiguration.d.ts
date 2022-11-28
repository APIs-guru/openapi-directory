import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetReplicationConfigurationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetReplicationConfigurationRequestBody extends SpeakeasyBase {
    sourceServerId: string;
}
export declare class GetReplicationConfigurationRequest extends SpeakeasyBase {
    headers: GetReplicationConfigurationHeaders;
    request: GetReplicationConfigurationRequestBody;
}
export declare class GetReplicationConfigurationResponse extends SpeakeasyBase {
    contentType: string;
    replicationConfiguration?: shared.ReplicationConfiguration;
    resourceNotFoundException?: any;
    statusCode: number;
    uninitializedAccountException?: any;
}
