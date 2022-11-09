import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum {
    Lightsail20161128GetRelationalDatabaseMasterUserPassword = "Lightsail_20161128.GetRelationalDatabaseMasterUserPassword"
}


export class GetRelationalDatabaseMasterUserPasswordHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetRelationalDatabaseMasterUserPasswordXAmzTargetEnum;
}


export class GetRelationalDatabaseMasterUserPasswordRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetRelationalDatabaseMasterUserPasswordHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetRelationalDatabaseMasterUserPasswordRequest;
}


export class GetRelationalDatabaseMasterUserPasswordResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  accountSetupInProgressException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  getRelationalDatabaseMasterUserPasswordResult?: shared.GetRelationalDatabaseMasterUserPasswordResult;

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
