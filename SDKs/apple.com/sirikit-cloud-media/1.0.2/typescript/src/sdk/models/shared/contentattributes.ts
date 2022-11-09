import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ContentAttributesArtwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ContentAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=albumName" })
  albumName?: string;

  @Metadata({ data: "json, name=artistName" })
  artistName?: string;

  @Metadata({ data: "json, name=artwork" })
  artwork?: ContentAttributesArtwork;

  @Metadata({ data: "json, name=composerName" })
  composerName?: string;

  @Metadata({ data: "json, name=durationInMillis" })
  durationInMillis?: number;

  @Metadata({ data: "json, name=genreNames" })
  genreNames?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=trackNumber" })
  trackNumber?: number;
}
