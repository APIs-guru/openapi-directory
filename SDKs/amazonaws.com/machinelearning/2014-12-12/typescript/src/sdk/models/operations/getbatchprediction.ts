import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetBatchPredictionXAmzTargetEnum {
    AmazonMl20141212GetBatchPrediction = "AmazonML_20141212.GetBatchPrediction"
}


export class GetBatchPredictionHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetBatchPredictionXAmzTargetEnum;
}


export class GetBatchPredictionRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetBatchPredictionHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetBatchPredictionInput;
}


export class GetBatchPredictionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getBatchPredictionOutput?: shared.GetBatchPredictionOutput;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
