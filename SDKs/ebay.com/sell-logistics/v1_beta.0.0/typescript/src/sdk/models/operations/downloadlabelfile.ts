import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DownloadLabelFilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shipmentId" })
  shipmentId: string;
}


export class DownloadLabelFileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DownloadLabelFileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadLabelFilePathParams;

  @Metadata()
  security: DownloadLabelFileSecurity;
}


export class DownloadLabelFileResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
