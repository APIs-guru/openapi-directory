import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostVolumesFsCreateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostVolumesFsCreateRequest extends SpeakeasyBase {
  @Metadata()
  headers: PostVolumesFsCreateHeaders;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.FileshareParam;
}


export class PostVolumesFsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
