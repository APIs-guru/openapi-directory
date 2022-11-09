import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdStyleColors
/** 
 * The colors which are included in the style. These are represented as six hexadecimal characters, similar to HTML color codes, but without the leading hash.
**/
export class AdStyleColors extends SpeakeasyBase {
  @Metadata({ data: "json, name=background" })
  background?: string;

  @Metadata({ data: "json, name=border" })
  border?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// AdStyleFont
/** 
 * The font which is included in the style.
**/
export class AdStyleFont extends SpeakeasyBase {
  @Metadata({ data: "json, name=family" })
  family?: string;

  @Metadata({ data: "json, name=size" })
  size?: string;
}


export class AdStyle extends SpeakeasyBase {
  @Metadata({ data: "json, name=colors" })
  colors?: AdStyleColors;

  @Metadata({ data: "json, name=corners" })
  corners?: string;

  @Metadata({ data: "json, name=font" })
  font?: AdStyleFont;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
