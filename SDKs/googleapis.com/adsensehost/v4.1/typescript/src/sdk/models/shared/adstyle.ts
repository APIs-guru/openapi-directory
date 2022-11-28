import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdStyleColors
/** 
 * The colors included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
**/
export class AdStyleColors extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background" })
  background?: string;

  @SpeakeasyMetadata({ data: "json, name=border" })
  border?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// AdStyleFont
/** 
 * The font which is included in the style.
**/
export class AdStyleFont extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=family" })
  family?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: string;
}


export class AdStyle extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colors" })
  colors?: AdStyleColors;

  @SpeakeasyMetadata({ data: "json, name=corners" })
  corners?: string;

  @SpeakeasyMetadata({ data: "json, name=font" })
  font?: AdStyleFont;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
