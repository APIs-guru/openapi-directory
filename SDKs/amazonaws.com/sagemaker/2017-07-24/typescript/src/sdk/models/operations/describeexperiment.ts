import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeExperimentXAmzTargetEnum {
    SageMakerDescribeExperiment = "SageMaker.DescribeExperiment"
}


export class DescribeExperimentHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeExperimentXAmzTargetEnum;
}


export class DescribeExperimentRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeExperimentHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeExperimentRequest;
}


export class DescribeExperimentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeExperimentResponse?: shared.DescribeExperimentResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
