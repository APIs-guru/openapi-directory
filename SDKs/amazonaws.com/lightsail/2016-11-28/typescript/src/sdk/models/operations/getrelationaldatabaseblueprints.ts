import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRelationalDatabaseBlueprintsXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseBlueprints = "Lightsail_20161128.GetRelationalDatabaseBlueprints"
}


export class GetRelationalDatabaseBlueprintsHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRelationalDatabaseBlueprintsXAmzTargetEnum;
}


export class GetRelationalDatabaseBlueprintsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRelationalDatabaseBlueprintsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRelationalDatabaseBlueprintsRequest;
}


export class GetRelationalDatabaseBlueprintsResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountSetupInProgressException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getRelationalDatabaseBlueprintsResult?: shared.GetRelationalDatabaseBlueprintsResult;

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
  unauthenticatedException?: any;
}
