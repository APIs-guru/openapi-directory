import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSecretVersionIdsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSecretVersionIdsXAmzTargetEnum {
    SecretsmanagerListSecretVersionIds = "secretsmanager.ListSecretVersionIds"
}
export declare class ListSecretVersionIdsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSecretVersionIdsXAmzTargetEnum;
}
export declare class ListSecretVersionIdsRequest extends SpeakeasyBase {
    queryParams: ListSecretVersionIdsQueryParams;
    headers: ListSecretVersionIdsHeaders;
    request: shared.ListSecretVersionIdsRequest;
}
export declare class ListSecretVersionIdsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listSecretVersionIdsResponse?: shared.ListSecretVersionIdsResponse;
    resourceNotFoundException?: any;
    statusCode: number;
}
