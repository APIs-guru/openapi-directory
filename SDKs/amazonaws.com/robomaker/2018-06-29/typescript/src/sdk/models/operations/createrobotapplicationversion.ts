import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateRobotApplicationVersionHeaders extends SpeakeasyBase {
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
}


export class CreateRobotApplicationVersionRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=application" })
  application: string;

  @SpeakeasyMetadata({ data: "json, name=currentRevisionId" })
  currentRevisionId?: string;

  @SpeakeasyMetadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @SpeakeasyMetadata({ data: "json, name=s3Etags" })
  s3Etags?: string[];
}


export class CreateRobotApplicationVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: CreateRobotApplicationVersionHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateRobotApplicationVersionRequestBody;
}


export class CreateRobotApplicationVersionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createRobotApplicationVersionResponse?: shared.CreateRobotApplicationVersionResponse;

  @SpeakeasyMetadata()
  idempotentParameterMismatchException?: any;

  @SpeakeasyMetadata()
  internalServerException?: any;

  @SpeakeasyMetadata()
  invalidParameterException?: any;

  @SpeakeasyMetadata()
  limitExceededException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  throttlingException?: any;
}
