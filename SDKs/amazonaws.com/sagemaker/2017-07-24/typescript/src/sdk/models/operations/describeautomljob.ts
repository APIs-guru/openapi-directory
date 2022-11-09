import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAutoMlJobXAmzTargetEnum {
    SageMakerDescribeAutoMlJob = "SageMaker.DescribeAutoMLJob"
}


export class DescribeAutoMlJobHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAutoMlJobXAmzTargetEnum;
}


export class DescribeAutoMlJobRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAutoMlJobHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAutoMlJobRequest;
}


export class DescribeAutoMlJobResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAutoMlJobResponse?: shared.DescribeAutoMlJobResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
