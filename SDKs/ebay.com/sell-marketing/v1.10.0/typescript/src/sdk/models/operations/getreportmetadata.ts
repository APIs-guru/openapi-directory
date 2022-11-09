import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetReportMetadataSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReportMetadataRequest extends SpeakeasyBase {
  @Metadata()
  security: GetReportMetadataSecurity;
}


export class GetReportMetadataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  reportMetadatas?: shared.ReportMetadatas;

  @Metadata()
  statusCode: number;
}
