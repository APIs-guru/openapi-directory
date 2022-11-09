import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=css" })
  css?: string;

  @Metadata({ data: "json, name=css_link" })
  cssLink?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=html_footer" })
  htmlFooter?: string;

  @Metadata({ data: "json, name=html_nav" })
  htmlNav?: string;

  @Metadata({ data: "json, name=java_script_link" })
  javaScriptLink?: string;
}
