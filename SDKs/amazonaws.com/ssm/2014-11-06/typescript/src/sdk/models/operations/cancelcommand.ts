import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CancelCommandXAmzTargetEnum {
    AmazonSsmCancelCommand = "AmazonSSM.CancelCommand"
}


export class CancelCommandHeaders extends SpeakeasyBase {
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
  xAmzTarget: CancelCommandXAmzTargetEnum;
}


export class CancelCommandRequest extends SpeakeasyBase {
  @Metadata()
  headers: CancelCommandHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CancelCommandRequest;
}


export class CancelCommandResponse extends SpeakeasyBase {
  @Metadata()
  cancelCommandResult?: Map<string, any>;

  @Metadata()
  contentType: string;

  @Metadata()
  duplicateInstanceId?: any;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidCommandId?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  statusCode: number;
}
