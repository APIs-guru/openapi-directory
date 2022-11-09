import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Playerinput extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundBottom" })
  backgroundBottom?: string;

  @Metadata({ data: "json, name=backgroundText" })
  backgroundText?: string;

  @Metadata({ data: "json, name=backgroundTop" })
  backgroundTop?: string;

  @Metadata({ data: "json, name=enableApi" })
  enableApi?: boolean;

  @Metadata({ data: "json, name=enableControls" })
  enableControls?: boolean;

  @Metadata({ data: "json, name=forceAutoplay" })
  forceAutoplay?: boolean;

  @Metadata({ data: "json, name=forceLoop" })
  forceLoop?: boolean;

  @Metadata({ data: "json, name=hideTitle" })
  hideTitle?: boolean;

  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=linkHover" })
  linkHover?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=trackBackground" })
  trackBackground?: string;

  @Metadata({ data: "json, name=trackPlayed" })
  trackPlayed?: string;

  @Metadata({ data: "json, name=trackUnplayed" })
  trackUnplayed?: string;
}
