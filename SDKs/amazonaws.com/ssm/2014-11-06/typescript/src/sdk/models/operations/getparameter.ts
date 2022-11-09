import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetParameterXAmzTargetEnum {
    AmazonSsmGetParameter = "AmazonSSM.GetParameter"
}


export class GetParameterHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetParameterXAmzTargetEnum;
}


export class GetParameterRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetParameterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetParameterRequest;
}


export class GetParameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getParameterResult?: shared.GetParameterResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidKeyId?: any;

  @Metadata()
  parameterNotFound?: any;

  @Metadata()
  parameterVersionNotFound?: any;

  @Metadata()
  statusCode: number;
}
