import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateRelationalDatabaseFromSnapshotXAmzTargetEnum {
    Lightsail20161128CreateRelationalDatabaseFromSnapshot = "Lightsail_20161128.CreateRelationalDatabaseFromSnapshot"
}


export class CreateRelationalDatabaseFromSnapshotHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateRelationalDatabaseFromSnapshotXAmzTargetEnum;
}


export class CreateRelationalDatabaseFromSnapshotRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateRelationalDatabaseFromSnapshotHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateRelationalDatabaseFromSnapshotRequest;
}


export class CreateRelationalDatabaseFromSnapshotResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountSetupInProgressException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  createRelationalDatabaseFromSnapshotResult?: shared.CreateRelationalDatabaseFromSnapshotResult;

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
