import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSimulationApplicationVersionHeaders extends SpeakeasyBase {
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
}


export class CreateSimulationApplicationVersionRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=application" })
  application: string;

  @Metadata({ data: "json, name=currentRevisionId" })
  currentRevisionId?: string;

  @Metadata({ data: "json, name=imageDigest" })
  imageDigest?: string;

  @Metadata({ data: "json, name=s3Etags" })
  s3Etags?: string[];
}


export class CreateSimulationApplicationVersionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateSimulationApplicationVersionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateSimulationApplicationVersionRequestBody;
}


export class CreateSimulationApplicationVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSimulationApplicationVersionResponse?: shared.CreateSimulationApplicationVersionResponse;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidParameterException?: any;

  @Metadata()
  limitExceededException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;
}
