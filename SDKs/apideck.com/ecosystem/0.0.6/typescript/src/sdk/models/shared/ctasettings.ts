import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CtaSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=background_color" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=button_background_color" })
  buttonBackgroundColor?: string;

  @Metadata({ data: "json, name=button_color" })
  buttonColor?: string;

  @Metadata({ data: "json, name=button_label" })
  buttonLabel?: string;

  @Metadata({ data: "json, name=button_link" })
  buttonLink?: string;

  @Metadata({ data: "json, name=color" })
  color?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
