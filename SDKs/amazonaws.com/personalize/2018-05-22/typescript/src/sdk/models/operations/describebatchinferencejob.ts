import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeBatchInferenceJobXAmzTargetEnum {
    AmazonPersonalizeDescribeBatchInferenceJob = "AmazonPersonalize.DescribeBatchInferenceJob"
}


export class DescribeBatchInferenceJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeBatchInferenceJobXAmzTargetEnum;
}


export class DescribeBatchInferenceJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeBatchInferenceJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeBatchInferenceJobRequest;
}


export class DescribeBatchInferenceJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeBatchInferenceJobResponse?: shared.DescribeBatchInferenceJobResponse;

  @Metadata()
  invalidInputException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;
}
