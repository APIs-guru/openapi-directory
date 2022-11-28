import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MrssGroupContent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  duration?: number;

  @SpeakeasyMetadata()
  fileSize?: number;

  @SpeakeasyMetadata()
  framerate?: number;

  @SpeakeasyMetadata()
  height?: number;

  @SpeakeasyMetadata()
  lang?: string;

  @SpeakeasyMetadata()
  type?: string;

  @SpeakeasyMetadata()
  url?: string;
}
