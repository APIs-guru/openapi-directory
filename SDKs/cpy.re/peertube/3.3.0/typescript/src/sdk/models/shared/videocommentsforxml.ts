import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VideoCommentsForXml extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentEncoded?: string;

  @SpeakeasyMetadata()
  dcCreator?: string;

  @SpeakeasyMetadata()
  guid?: string;

  @SpeakeasyMetadata()
  link?: string;

  @SpeakeasyMetadata()
  pubDate?: Date;
}
