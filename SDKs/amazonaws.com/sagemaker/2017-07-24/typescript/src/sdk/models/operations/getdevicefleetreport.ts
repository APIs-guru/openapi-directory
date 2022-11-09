import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum GetDeviceFleetReportXAmzTargetEnum {
    SageMakerGetDeviceFleetReport = "SageMaker.GetDeviceFleetReport"
}


export class GetDeviceFleetReportHeaders extends SpeakeasyBase {
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
  xAmzTarget: GetDeviceFleetReportXAmzTargetEnum;
}


export class GetDeviceFleetReportRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDeviceFleetReportHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.GetDeviceFleetReportRequest;
}


export class GetDeviceFleetReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getDeviceFleetReportResponse?: shared.GetDeviceFleetReportResponse;

  @Metadata()
  statusCode: number;
}
