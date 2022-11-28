import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDeliverabilityTestReportPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ReportId" })
  reportId: string;
}


export class GetDeliverabilityTestReportHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Algorithm" })
  xAmzAlgorithm?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Content-Sha256" })
  xAmzContentSha256?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Credential" })
  xAmzCredential?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Date" })
  xAmzDate?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Security-Token" })
  xAmzSecurityToken?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-Signature" })
  xAmzSignature?: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Amz-SignedHeaders" })
  xAmzSignedHeaders?: string;
}


export class GetDeliverabilityTestReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDeliverabilityTestReportPathParams;

  @SpeakeasyMetadata()
  headers: GetDeliverabilityTestReportHeaders;
}


export class GetDeliverabilityTestReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  badRequestException?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getDeliverabilityTestReportResponse?: shared.GetDeliverabilityTestReportResponse;

  @SpeakeasyMetadata()
  notFoundException?: any;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequestsException?: any;
}
