import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveUploadSharePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=share_id" })
  shareId: number;
}


export class RemoveUploadShareHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class RemoveUploadShareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveUploadSharePathParams;

  @SpeakeasyMetadata()
  headers: RemoveUploadShareHeaders;
}


export class RemoveUploadShareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponse?: shared.ErrorResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
