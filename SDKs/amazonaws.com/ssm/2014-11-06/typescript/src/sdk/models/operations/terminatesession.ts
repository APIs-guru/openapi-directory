import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum TerminateSessionXAmzTargetEnum {
    AmazonSsmTerminateSession = "AmazonSSM.TerminateSession"
}


export class TerminateSessionHeaders extends SpeakeasyBase {
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
  xAmzTarget: TerminateSessionXAmzTargetEnum;
}


export class TerminateSessionRequest extends SpeakeasyBase {
  @Metadata()
  headers: TerminateSessionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.TerminateSessionRequest;
}


export class TerminateSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  doesNotExistException?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  terminateSessionResponse?: shared.TerminateSessionResponse;
}
