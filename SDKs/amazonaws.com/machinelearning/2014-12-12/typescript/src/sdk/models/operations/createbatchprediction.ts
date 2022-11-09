import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum CreateBatchPredictionXAmzTargetEnum {
    AmazonMl20141212CreateBatchPrediction = "AmazonML_20141212.CreateBatchPrediction"
}


export class CreateBatchPredictionHeaders extends SpeakeasyBase {
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
  xAmzTarget: CreateBatchPredictionXAmzTargetEnum;
}


export class CreateBatchPredictionRequest extends SpeakeasyBase {
  @Metadata()
  headers: CreateBatchPredictionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateBatchPredictionInput;
}


export class CreateBatchPredictionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createBatchPredictionOutput?: shared.CreateBatchPredictionOutput;

  @Metadata()
  idempotentParameterMismatchException?: any;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  statusCode: number;
}
