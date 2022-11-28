import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetParameterXAmzTargetEnum {
    AmazonSsmGetParameter = "AmazonSSM.GetParameter"
}


export class GetParameterHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Target" })
  xAmzTarget: GetParameterXAmzTargetEnum;
}


export class GetParameterRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetParameterHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.GetParameterRequest;
}


export class GetParameterResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getParameterResult?: shared.GetParameterResult;

  @SpeakeasyMetadata()
  internalServerError?: any;

  @SpeakeasyMetadata()
  invalidKeyId?: any;

  @SpeakeasyMetadata()
  parameterNotFound?: any;

  @SpeakeasyMetadata()
  parameterVersionNotFound?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
