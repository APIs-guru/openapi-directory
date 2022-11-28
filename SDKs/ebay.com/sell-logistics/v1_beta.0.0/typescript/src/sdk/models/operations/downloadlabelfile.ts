import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DownloadLabelFilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shipmentId" })
  shipmentId: string;
}


export class DownloadLabelFileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  apiAuth: shared.SchemeApiAuth;
}


export class DownloadLabelFileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadLabelFilePathParams;

  @SpeakeasyMetadata()
  security: DownloadLabelFileSecurity;
}


export class DownloadLabelFileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
