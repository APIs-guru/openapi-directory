import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DeleteParameterXAmzTargetEnum {
    AmazonSsmDeleteParameter = "AmazonSSM.DeleteParameter"
}


export class DeleteParameterHeaders extends SpeakeasyBase {
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
  xAmzTarget: DeleteParameterXAmzTargetEnum;
}


export class DeleteParameterRequest extends SpeakeasyBase {
  @Metadata()
  headers: DeleteParameterHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeleteParameterRequest;
}


export class DeleteParameterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteParameterResult?: Map<string, any>;

  @Metadata()
  internalServerError?: any;

  @Metadata()
  parameterNotFound?: any;

  @Metadata()
  statusCode: number;
}
