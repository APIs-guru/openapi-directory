import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeEndpointXAmzTargetEnum {
    SageMakerDescribeEndpoint = "SageMaker.DescribeEndpoint"
}


export class DescribeEndpointHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeEndpointXAmzTargetEnum;
}


export class DescribeEndpointRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeEndpointHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeEndpointInput;
}


export class DescribeEndpointResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeEndpointOutput?: shared.DescribeEndpointOutput;

  @Metadata()
  statusCode: number;
}
