import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum RebootInstanceXAmzTargetEnum {
    Lightsail20161128RebootInstance = "Lightsail_20161128.RebootInstance"
}


export class RebootInstanceHeaders extends SpeakeasyBase {
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
  xAmzTarget: RebootInstanceXAmzTargetEnum;
}


export class RebootInstanceRequest extends SpeakeasyBase {
  @Metadata()
  headers: RebootInstanceHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.RebootInstanceRequest;
}


export class RebootInstanceResponse extends SpeakeasyBase {
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
  rebootInstanceResult?: shared.RebootInstanceResult;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthenticatedException?: any;
}
