import { SpeakeasyBase } from "../../../internal/utils";
export declare class ContentAttributesArtwork extends SpeakeasyBase {
    url?: string;
}
export declare class ContentAttributes extends SpeakeasyBase {
    albumName?: string;
    artistName?: string;
    artwork?: ContentAttributesArtwork;
    composerName?: string;
    durationInMillis?: number;
    genreNames?: string[];
    name?: string;
    trackNumber?: number;
}
