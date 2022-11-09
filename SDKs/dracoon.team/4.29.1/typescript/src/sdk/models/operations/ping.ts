import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PingResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  ping200TextPlainString?: string;
}
