import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutInstancePublicPortsXAmzTargetEnum {
    Lightsail20161128PutInstancePublicPorts = "Lightsail_20161128.PutInstancePublicPorts"
}


export class PutInstancePublicPortsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutInstancePublicPortsXAmzTargetEnum;
}


export class PutInstancePublicPortsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutInstancePublicPortsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutInstancePublicPortsRequest;
}


export class PutInstancePublicPortsResponse extends SpeakeasyBase {
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
  putInstancePublicPortsResult?: shared.PutInstancePublicPortsResult;

  @Metadata()
  serviceException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unauthenticatedException?: any;
}
