import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PingUserHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Sds-Auth-Token" })
  xSdsAuthToken?: string;
}


export class PingUserRequest extends SpeakeasyBase {
  @Metadata()
  headers: PingUserHeaders;
}


export class PingUserResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  pingUser200TextPlainString?: string;
}
