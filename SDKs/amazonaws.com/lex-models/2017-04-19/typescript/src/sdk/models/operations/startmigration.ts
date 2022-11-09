import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StartMigrationHeaders extends SpeakeasyBase {
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

export enum StartMigrationRequestBodyMigrationStrategyEnum {
    CreateNew = "CREATE_NEW"
,    UpdateExisting = "UPDATE_EXISTING"
}


export class StartMigrationRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=migrationStrategy" })
  migrationStrategy: StartMigrationRequestBodyMigrationStrategyEnum;

  @Metadata({ data: "json, name=v1BotName" })
  v1BotName: string;

  @Metadata({ data: "json, name=v1BotVersion" })
  v1BotVersion: string;

  @Metadata({ data: "json, name=v2BotName" })
  v2BotName: string;

  @Metadata({ data: "json, name=v2BotRole" })
  v2BotRole: string;
}


export class StartMigrationRequest extends SpeakeasyBase {
  @Metadata()
  headers: StartMigrationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: StartMigrationRequestBody;
}


export class StartMigrationResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  badRequestException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  internalFailureException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  startMigrationResponse?: shared.StartMigrationResponse;

  @Metadata()
  statusCode: number;
}
