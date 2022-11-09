import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetMigrationsMigrationStatusEqualsEnum {
    InProgress = "IN_PROGRESS"
,    Completed = "COMPLETED"
,    Failed = "FAILED"
}

export enum GetMigrationsSortByAttributeEnum {
    V1BotName = "V1_BOT_NAME"
,    MigrationDateTime = "MIGRATION_DATE_TIME"
}

export enum GetMigrationsSortByOrderEnum {
    Ascending = "ASCENDING"
,    Descending = "DESCENDING"
}


export class GetMigrationsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=migrationStatusEquals" })
  migrationStatusEquals?: GetMigrationsMigrationStatusEqualsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortByAttribute" })
  sortByAttribute?: GetMigrationsSortByAttributeEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sortByOrder" })
  sortByOrder?: GetMigrationsSortByOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=v1BotNameContains" })
  v1BotNameContains?: string;
}


export class GetMigrationsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetMigrationsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetMigrationsQueryParams;

  @Metadata()
  headers: GetMigrationsHeaders;
}


export class GetMigrationsResponse extends SpeakeasyBase {
  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getMigrationsResponse?: shared.GetMigrationsResponse;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;
}
