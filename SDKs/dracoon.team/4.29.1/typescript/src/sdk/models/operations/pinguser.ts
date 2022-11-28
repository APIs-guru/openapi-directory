import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PingUserHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class PingUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: PingUserHeaders;
}


export class PingUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  pingUser200TextPlainString?: string;
}
