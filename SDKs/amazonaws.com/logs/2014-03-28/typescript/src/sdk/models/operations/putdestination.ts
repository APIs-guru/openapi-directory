import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutDestinationXAmzTargetEnum {
    Logs20140328PutDestination = "Logs_20140328.PutDestination"
}


export class PutDestinationHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutDestinationXAmzTargetEnum;
}


export class PutDestinationRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutDestinationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutDestinationRequest;
}


export class PutDestinationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  operationAbortedException?: any;

  @Metadata()
  putDestinationResponse?: shared.PutDestinationResponse;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;
}
