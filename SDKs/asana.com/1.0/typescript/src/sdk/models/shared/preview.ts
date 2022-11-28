import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Preview
/** 
 * A collection of rich text that will be displayed as a preview to another app.
 * 
 * This is read-only except for a small group of whitelisted apps.
**/
export class Preview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fallback" })
  fallback?: string;

  @SpeakeasyMetadata({ data: "json, name=footer" })
  footer?: string;

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: string;

  @SpeakeasyMetadata({ data: "json, name=header_link" })
  headerLink?: string;

  @SpeakeasyMetadata({ data: "json, name=html_text" })
  htmlText?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=title_link" })
  titleLink?: string;
}
