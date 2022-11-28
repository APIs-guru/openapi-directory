import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveDownloadSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class RemoveDownloadShareHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveDownloadShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveDownloadSharePathParams;

  @SpeakeasyMetadata()
  headers: RemoveDownloadShareHeaders;
}


export class RemoveDownloadShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
