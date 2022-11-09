import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum StopRelationalDatabaseXAmzTargetEnum {
    Lightsail20161128StopRelationalDatabase = "Lightsail_20161128.StopRelationalDatabase"
}


export class StopRelationalDatabaseHeaders extends SpeakeasyBase {
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

  @Metadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: StopRelationalDatabaseXAmzTargetEnum;
}


export class StopRelationalDatabaseRequest extends SpeakeasyBase {
  @Metadata()
  headers: StopRelationalDatabaseHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StopRelationalDatabaseRequest;
}


export class StopRelationalDatabaseResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountSetupInProgressException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  notFoundException?: any;

  @Metadata()
  operationFailureException?: any;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  stopRelationalDatabaseResult?: shared.StopRelationalDatabaseResult;

  @Metadata()
  unauthenticatedException?: any;
}
