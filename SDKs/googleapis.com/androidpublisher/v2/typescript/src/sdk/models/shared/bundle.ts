import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Bundle extends SpeakeasyBase {
  @SpeakeasyMetadata()
  sha1?: string;

  @SpeakeasyMetadata()
  sha256?: string;

  @SpeakeasyMetadata()
  versionCode?: number;
}
