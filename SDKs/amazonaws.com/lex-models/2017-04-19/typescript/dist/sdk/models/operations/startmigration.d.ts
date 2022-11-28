import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class StartMigrationHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare enum StartMigrationRequestBodyMigrationStrategyEnum {
    CreateNew = "CREATE_NEW",
    UpdateExisting = "UPDATE_EXISTING"
}
export declare class StartMigrationRequestBody extends SpeakeasyBase {
    migrationStrategy: StartMigrationRequestBodyMigrationStrategyEnum;
    v1BotName: string;
    v1BotVersion: string;
    v2BotName: string;
    v2BotRole: string;
}
export declare class StartMigrationRequest extends SpeakeasyBase {
    headers: StartMigrationHeaders;
    request: StartMigrationRequestBody;
}
export declare class StartMigrationResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    badRequestException?: any;
    contentType: string;
    internalFailureException?: any;
    limitExceededException?: any;
    notFoundException?: any;
    startMigrationResponse?: shared.StartMigrationResponse;
    statusCode: number;
}
