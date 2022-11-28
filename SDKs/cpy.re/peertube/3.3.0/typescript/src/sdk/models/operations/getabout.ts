import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAboutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverConfigAbout?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
