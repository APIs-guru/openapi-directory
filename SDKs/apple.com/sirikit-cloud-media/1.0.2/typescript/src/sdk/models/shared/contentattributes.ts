import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ContentAttributesArtwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ContentAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=albumName" })
  albumName?: string;

  @SpeakeasyMetadata({ data: "json, name=artistName" })
  artistName?: string;

  @SpeakeasyMetadata({ data: "json, name=artwork" })
  artwork?: ContentAttributesArtwork;

  @SpeakeasyMetadata({ data: "json, name=composerName" })
  composerName?: string;

  @SpeakeasyMetadata({ data: "json, name=durationInMillis" })
  durationInMillis?: number;

  @SpeakeasyMetadata({ data: "json, name=genreNames" })
  genreNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=trackNumber" })
  trackNumber?: number;
}
