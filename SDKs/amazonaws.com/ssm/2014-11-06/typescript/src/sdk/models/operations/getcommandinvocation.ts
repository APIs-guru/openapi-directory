import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetCommandInvocationXAmzTargetEnum {
    AmazonSsmGetCommandInvocation = "AmazonSSM.GetCommandInvocation"
}


export class GetCommandInvocationHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetCommandInvocationXAmzTargetEnum;
}


export class GetCommandInvocationRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetCommandInvocationHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetCommandInvocationRequest;
}


export class GetCommandInvocationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getCommandInvocationResult?: shared.GetCommandInvocationResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidCommandId?: any;

  @Metadata()
  invalidInstanceId?: any;

  @Metadata()
  invalidPluginName?: any;

  @Metadata()
  invocationDoesNotExist?: any;

  @Metadata()
  statusCode: number;
}
