import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  sha1?: string;

  @SpeakeasyMetadata()
  sha256?: string;

  @SpeakeasyMetadata()
  url?: string;
}
