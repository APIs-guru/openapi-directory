import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeDeviceFleetXAmzTargetEnum {
    SageMakerDescribeDeviceFleet = "SageMaker.DescribeDeviceFleet"
}


export class DescribeDeviceFleetHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeDeviceFleetXAmzTargetEnum;
}


export class DescribeDeviceFleetRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeDeviceFleetHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeDeviceFleetRequest;
}


export class DescribeDeviceFleetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeDeviceFleetResponse?: shared.DescribeDeviceFleetResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
