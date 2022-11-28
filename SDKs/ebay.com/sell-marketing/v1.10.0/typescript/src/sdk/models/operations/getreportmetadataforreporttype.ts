import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportMetadataForReportTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=report_type" })
  reportType: string;
}


export class GetReportMetadataForReportTypeSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReportMetadataForReportTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetReportMetadataForReportTypePathParams;

  @SpeakeasyMetadata()
  security: GetReportMetadataForReportTypeSecurity;
}


export class GetReportMetadataForReportTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reportMetadata?: shared.ReportMetadata;

  @SpeakeasyMetadata()
  statusCode: number;
}
