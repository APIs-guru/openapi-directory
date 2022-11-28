import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StartMigrationHeaders extends SpeakeasyBase {
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

export enum StartMigrationRequestBodyMigrationStrategyEnum {
    CreateNew = "CREATE_NEW",
    UpdateExisting = "UPDATE_EXISTING"
}


export class StartMigrationRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=migrationStrategy" })
  migrationStrategy: StartMigrationRequestBodyMigrationStrategyEnum;

  @SpeakeasyMetadata({ data: "json, name=v1BotName" })
  v1BotName: string;

  @SpeakeasyMetadata({ data: "json, name=v1BotVersion" })
  v1BotVersion: string;

  @SpeakeasyMetadata({ data: "json, name=v2BotName" })
  v2BotName: string;

  @SpeakeasyMetadata({ data: "json, name=v2BotRole" })
  v2BotRole: string;
}


export class StartMigrationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: StartMigrationHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StartMigrationRequestBody;
}


export class StartMigrationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  accessDeniedException?: any;

  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  internalFailureException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  startMigrationResponse?: shared.StartMigrationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
