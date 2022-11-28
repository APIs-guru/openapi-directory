import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetMigrationsMigrationStatusEqualsEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED"
}
export declare enum GetMigrationsSortByAttributeEnum {
    V1BotName = "V1_BOT_NAME",
    MigrationDateTime = "MIGRATION_DATE_TIME"
}
export declare enum GetMigrationsSortByOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class GetMigrationsQueryParams extends SpeakeasyBase {
    maxResults?: number;
    migrationStatusEquals?: GetMigrationsMigrationStatusEqualsEnum;
    nextToken?: string;
    sortByAttribute?: GetMigrationsSortByAttributeEnum;
    sortByOrder?: GetMigrationsSortByOrderEnum;
    v1BotNameContains?: string;
}
export declare class GetMigrationsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GetMigrationsRequest extends SpeakeasyBase {
    queryParams: GetMigrationsQueryParams;
    headers: GetMigrationsHeaders;
}
export declare class GetMigrationsResponse extends SpeakeasyBase {
    badRequestException?: any;
    contentType: string;
    getMigrationsResponse?: shared.GetMigrationsResponse;
    internalFailureException?: any;
    limitExceededException?: any;
    statusCode: number;
}
