import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportMetadataForReportTypePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=report_type" })
  reportType: string;
}


export class GetReportMetadataForReportTypeSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReportMetadataForReportTypeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetReportMetadataForReportTypePathParams;

  @Metadata()
  security: GetReportMetadataForReportTypeSecurity;
}


export class GetReportMetadataForReportTypeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reportMetadata?: shared.ReportMetadata;

  @Metadata()
  statusCode: number;
}
