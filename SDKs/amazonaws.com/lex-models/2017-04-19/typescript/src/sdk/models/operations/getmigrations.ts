import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetMigrationsMigrationStatusEqualsEnum {
    InProgress = "IN_PROGRESS",
    Completed = "COMPLETED",
    Failed = "FAILED"
}

export enum GetMigrationsSortByAttributeEnum {
    V1BotName = "V1_BOT_NAME",
    MigrationDateTime = "MIGRATION_DATE_TIME"
}

export enum GetMigrationsSortByOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}


export class GetMigrationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=migrationStatusEquals" })
  migrationStatusEquals?: GetMigrationsMigrationStatusEqualsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortByAttribute" })
  sortByAttribute?: GetMigrationsSortByAttributeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sortByOrder" })
  sortByOrder?: GetMigrationsSortByOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=v1BotNameContains" })
  v1BotNameContains?: string;
}


export class GetMigrationsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetMigrationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMigrationsQueryParams;

  @SpeakeasyMetadata()
  headers: GetMigrationsHeaders;
}


export class GetMigrationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMigrationsResponse?: shared.GetMigrationsResponse;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
