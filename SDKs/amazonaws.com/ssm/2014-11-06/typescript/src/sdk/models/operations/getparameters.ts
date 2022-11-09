import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetParametersXAmzTargetEnum {
    AmazonSsmGetParameters = "AmazonSSM.GetParameters"
}


export class GetParametersHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetParametersXAmzTargetEnum;
}


export class GetParametersRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetParametersHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetParametersRequest;
}


export class GetParametersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getParametersResult?: shared.GetParametersResult;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  invalidKeyId?: any;

  @Metadata()
  statusCode: number;
}
