import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeModelXAmzTargetEnum {
    SageMakerDescribeModel = "SageMaker.DescribeModel"
}


export class DescribeModelHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeModelXAmzTargetEnum;
}


export class DescribeModelRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeModelHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeModelInput;
}


export class DescribeModelResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeModelOutput?: shared.DescribeModelOutput;

  @Metadata()
  statusCode: number;
}
