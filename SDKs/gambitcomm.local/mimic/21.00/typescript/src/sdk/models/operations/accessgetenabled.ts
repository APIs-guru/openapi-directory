import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccessGetEnabledResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accessGetEnabled200ApplicationJsonString?: string;
}
