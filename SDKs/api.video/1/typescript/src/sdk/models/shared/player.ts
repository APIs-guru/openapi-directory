import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PlayerAssets extends SpeakeasyBase {
  @Metadata({ data: "json, name=link" })
  link?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: string;
}


export class Player extends SpeakeasyBase {
  @Metadata({ data: "json, name=assets" })
  assets?: PlayerAssets;

  @Metadata({ data: "json, name=backgroundBottom" })
  backgroundBottom?: string;

  @Metadata({ data: "json, name=backgroundText" })
  backgroundText?: string;

  @Metadata({ data: "json, name=backgroundTop" })
  backgroundTop?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: Date;

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

  @Metadata({ data: "json, name=linkActive" })
  linkActive?: string;

  @Metadata({ data: "json, name=linkHover" })
  linkHover?: string;

  @Metadata({ data: "json, name=playerId" })
  playerId?: string;

  @Metadata({ data: "json, name=shapeAspect" })
  shapeAspect?: string;

  @Metadata({ data: "json, name=shapeBackgroundBottom" })
  shapeBackgroundBottom?: string;

  @Metadata({ data: "json, name=shapeBackgroundTop" })
  shapeBackgroundTop?: string;

  @Metadata({ data: "json, name=shapeMargin" })
  shapeMargin?: number;

  @Metadata({ data: "json, name=shapeRadius" })
  shapeRadius?: number;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=trackBackground" })
  trackBackground?: string;

  @Metadata({ data: "json, name=trackPlayed" })
  trackPlayed?: string;

  @Metadata({ data: "json, name=trackUnplayed" })
  trackUnplayed?: string;

  @Metadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
