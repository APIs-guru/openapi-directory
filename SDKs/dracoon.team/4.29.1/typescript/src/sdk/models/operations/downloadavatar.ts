import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DownloadAvatarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class DownloadAvatarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DownloadAvatarPathParams;
}


export class DownloadAvatarResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  downloadAvatar200ApplicationOctetStreamString?: string;
}
