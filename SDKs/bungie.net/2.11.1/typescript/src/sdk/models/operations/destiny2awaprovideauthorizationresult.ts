import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Destiny2AwaProvideAuthorizationResultResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
