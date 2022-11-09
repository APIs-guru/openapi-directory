import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
**/
export declare class AdStyleColors extends SpeakeasyBase {
    background?: string;
    border?: string;
    text?: string;
    title?: string;
    url?: string;
}
/**
 * The font which is included in the style.
**/
export declare class AdStyleFont extends SpeakeasyBase {
    family?: string;
    size?: string;
}
export declare class AdStyle extends SpeakeasyBase {
    colors?: AdStyleColors;
    corners?: string;
    font?: AdStyleFont;
    kind?: string;
}
