import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostVolumesFsCreateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostVolumesFsCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PostVolumesFsCreateHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.FileshareParam;
}


export class PostVolumesFsCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
