import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum RemoveRegionsFromReplicationXAmzTargetEnum {
    SecretsmanagerRemoveRegionsFromReplication = "secretsmanager.RemoveRegionsFromReplication"
}
export declare class RemoveRegionsFromReplicationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RemoveRegionsFromReplicationXAmzTargetEnum;
}
export declare class RemoveRegionsFromReplicationRequest extends SpeakeasyBase {
    headers: RemoveRegionsFromReplicationHeaders;
    request: shared.RemoveRegionsFromReplicationRequest;
}
export declare class RemoveRegionsFromReplicationResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidParameterException?: any;
    invalidRequestException?: any;
    removeRegionsFromReplicationResponse?: shared.RemoveRegionsFromReplicationResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
