import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=css" })
  css?: string;

  @SpeakeasyMetadata({ data: "json, name=css_link" })
  cssLink?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=html_footer" })
  htmlFooter?: string;

  @SpeakeasyMetadata({ data: "json, name=html_nav" })
  htmlNav?: string;

  @SpeakeasyMetadata({ data: "json, name=java_script_link" })
  javaScriptLink?: string;
}
