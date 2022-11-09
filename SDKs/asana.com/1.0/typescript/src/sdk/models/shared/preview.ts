import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Preview
/** 
 * A collection of rich text that will be displayed as a preview to another app.
 * 
 * This is read-only except for a small group of whitelisted apps.
**/
export class Preview extends SpeakeasyBase {
  @Metadata({ data: "json, name=fallback" })
  fallback?: string;

  @Metadata({ data: "json, name=footer" })
  footer?: string;

  @Metadata({ data: "json, name=header" })
  header?: string;

  @Metadata({ data: "json, name=header_link" })
  headerLink?: string;

  @Metadata({ data: "json, name=html_text" })
  htmlText?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=title_link" })
  titleLink?: string;
}
