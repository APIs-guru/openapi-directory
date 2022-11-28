import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetReportMetadataSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class GetReportMetadataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetReportMetadataSecurity;
}


export class GetReportMetadataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  reportMetadatas?: shared.ReportMetadatas;

  @SpeakeasyMetadata()
  statusCode: number;
}
