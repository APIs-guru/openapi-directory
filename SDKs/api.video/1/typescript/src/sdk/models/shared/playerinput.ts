import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Playerinput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundBottom" })
  backgroundBottom?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundText" })
  backgroundText?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundTop" })
  backgroundTop?: string;

  @SpeakeasyMetadata({ data: "json, name=enableApi" })
  enableApi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableControls" })
  enableControls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forceAutoplay" })
  forceAutoplay?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forceLoop" })
  forceLoop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hideTitle" })
  hideTitle?: boolean;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=linkHover" })
  linkHover?: string;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=trackBackground" })
  trackBackground?: string;

  @SpeakeasyMetadata({ data: "json, name=trackPlayed" })
  trackPlayed?: string;

  @SpeakeasyMetadata({ data: "json, name=trackUnplayed" })
  trackUnplayed?: string;
}
