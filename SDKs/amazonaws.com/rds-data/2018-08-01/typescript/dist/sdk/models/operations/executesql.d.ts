import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ExecuteSqlHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class ExecuteSqlRequestBody extends SpeakeasyBase {
    awsSecretStoreArn: string;
    database?: string;
    dbClusterOrInstanceArn: string;
    schema?: string;
    sqlStatements: string;
}
export declare class ExecuteSqlRequest extends SpeakeasyBase {
    headers: ExecuteSqlHeaders;
    request: ExecuteSqlRequestBody;
}
export declare class ExecuteSqlResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    executeSqlResponse?: shared.ExecuteSqlResponse;
    forbiddenException?: any;
    internalServerErrorException?: any;
    serviceUnavailableError?: any;
    statusCode: number;
}
