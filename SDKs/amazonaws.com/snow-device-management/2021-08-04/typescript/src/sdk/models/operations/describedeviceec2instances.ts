import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DescribeDeviceEc2InstancesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=managedDeviceId" })
  managedDeviceId: string;
}


export class DescribeDeviceEc2InstancesHeaders extends SpeakeasyBase {
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


export class DescribeDeviceEc2InstancesRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=instanceIds" })
  instanceIds: string[];
}


export class DescribeDeviceEc2InstancesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DescribeDeviceEc2InstancesPathParams;

  @Metadata()
  headers: DescribeDeviceEc2InstancesHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: DescribeDeviceEc2InstancesRequestBody;
}


export class DescribeDeviceEc2InstancesResponse extends SpeakeasyBase {
  @Metadata()
  accessDeniedException?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  describeDeviceEc2Output?: shared.DescribeDeviceEc2Output;

  @Metadata()
  internalServerException?: any;

  @Metadata()
  resourceNotFoundException?: any;

  @Metadata()
  statusCode: number;

  @Metadata()
  throttlingException?: any;

  @Metadata()
  validationException?: any;
}
