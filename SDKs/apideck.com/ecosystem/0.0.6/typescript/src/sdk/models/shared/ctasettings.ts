import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CtaSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=background_color" })
  backgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=button_background_color" })
  buttonBackgroundColor?: string;

  @SpeakeasyMetadata({ data: "json, name=button_color" })
  buttonColor?: string;

  @SpeakeasyMetadata({ data: "json, name=button_label" })
  buttonLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=button_link" })
  buttonLink?: string;

  @SpeakeasyMetadata({ data: "json, name=color" })
  color?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
