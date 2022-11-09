import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum UpdateRelationalDatabaseParametersXAmzTargetEnum {
    Lightsail20161128UpdateRelationalDatabaseParameters = "Lightsail_20161128.UpdateRelationalDatabaseParameters"
}


export class UpdateRelationalDatabaseParametersHeaders extends SpeakeasyBase {
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
  xAmzTarget: UpdateRelationalDatabaseParametersXAmzTargetEnum;
}


export class UpdateRelationalDatabaseParametersRequest extends SpeakeasyBase {
  @Metadata()
  headers: UpdateRelationalDatabaseParametersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.UpdateRelationalDatabaseParametersRequest;
}


export class UpdateRelationalDatabaseParametersResponse extends SpeakeasyBase {
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
  unauthenticatedException?: any;

  @Metadata()
  updateRelationalDatabaseParametersResult?: shared.UpdateRelationalDatabaseParametersResult;
}
