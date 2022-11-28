import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ping200TextPlainString?: string;
}
