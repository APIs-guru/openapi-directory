import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PutLogEventsXAmzTargetEnum {
    Logs20140328PutLogEvents = "Logs_20140328.PutLogEvents"
}


export class PutLogEventsHeaders extends SpeakeasyBase {
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
  xAmzTarget: PutLogEventsXAmzTargetEnum;
}


export class PutLogEventsRequest extends SpeakeasyBase {
  @Metadata()
  headers: PutLogEventsHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.PutLogEventsRequest;
}


export class PutLogEventsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  dataAlreadyAcceptedException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  invalidSequenceTokenException?: any;

  @Metadata()
  putLogEventsResponse?: shared.PutLogEventsResponse;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  serviceUnavailableException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  unrecognizedClientException?: any;
}
