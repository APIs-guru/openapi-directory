import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ListSecretsQueryParams extends SpeakeasyBase {
    maxResults?: string;
    nextToken?: string;
}
export declare enum ListSecretsXAmzTargetEnum {
    SecretsmanagerListSecrets = "secretsmanager.ListSecrets"
}
export declare class ListSecretsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ListSecretsXAmzTargetEnum;
}
export declare class ListSecretsRequest extends SpeakeasyBase {
    queryParams: ListSecretsQueryParams;
    headers: ListSecretsHeaders;
    request: shared.ListSecretsRequest;
}
export declare class ListSecretsResponse extends SpeakeasyBase {
    contentType: string;
    internalServiceError?: any;
    invalidNextTokenException?: any;
    invalidParameterException?: any;
    listSecretsResponse?: shared.ListSecretsResponse;
    statusCode: number;
}
