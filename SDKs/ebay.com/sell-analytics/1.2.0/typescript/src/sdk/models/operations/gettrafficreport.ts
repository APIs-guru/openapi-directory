import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrafficReportQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dimension" })
  dimension?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=metric" })
  metric?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;
}


export class GetTrafficReportSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetTrafficReportRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetTrafficReportQueryParams;

  @Metadata()
  security: GetTrafficReportSecurity;
}


export class GetTrafficReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  report?: shared.Report;

  @Metadata()
  statusCode: number;
}
