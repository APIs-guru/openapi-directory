import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ChromecastIconResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
