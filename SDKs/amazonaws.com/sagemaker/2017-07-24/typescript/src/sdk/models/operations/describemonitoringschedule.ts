import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum DescribeMonitoringScheduleXAmzTargetEnum {
    SageMakerDescribeMonitoringSchedule = "SageMaker.DescribeMonitoringSchedule"
}


export class DescribeMonitoringScheduleHeaders extends SpeakeasyBase {
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
  xAmzTarget: DescribeMonitoringScheduleXAmzTargetEnum;
}


export class DescribeMonitoringScheduleRequest extends SpeakeasyBase {
  @Metadata()
  headers: DescribeMonitoringScheduleHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DescribeMonitoringScheduleRequest;
}


export class DescribeMonitoringScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  describeMonitoringScheduleResponse?: shared.DescribeMonitoringScheduleResponse;

  @Metadata()
  resourceNotFound?: any;

  @Metadata()
  statusCode: number;
}
