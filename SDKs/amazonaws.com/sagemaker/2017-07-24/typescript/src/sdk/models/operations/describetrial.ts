import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeTrialXAmzTargetEnum {
    SageMakerDescribeTrial = "SageMaker.DescribeTrial"
}


export class DescribeTrialHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeTrialXAmzTargetEnum;
}


export class DescribeTrialRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeTrialHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeTrialRequest;
}


export class DescribeTrialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeTrialResponse?: shared.DescribeTrialResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
