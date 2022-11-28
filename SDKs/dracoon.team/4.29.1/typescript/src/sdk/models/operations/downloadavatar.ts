import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DownloadAvatarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class DownloadAvatarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DownloadAvatarPathParams;
}


export class DownloadAvatarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  downloadAvatar200ApplicationOctetStreamString?: string;
}
