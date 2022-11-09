import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeAppImageConfigXAmzTargetEnum {
    SageMakerDescribeAppImageConfig = "SageMaker.DescribeAppImageConfig"
}


export class DescribeAppImageConfigHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeAppImageConfigXAmzTargetEnum;
}


export class DescribeAppImageConfigRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeAppImageConfigHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeAppImageConfigRequest;
}


export class DescribeAppImageConfigResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeAppImageConfigResponse?: shared.DescribeAppImageConfigResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
