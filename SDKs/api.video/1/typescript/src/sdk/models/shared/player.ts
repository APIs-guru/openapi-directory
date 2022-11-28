import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PlayerAssets extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=link" })
  link?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;
}


export class Player extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=assets" })
  assets?: PlayerAssets;

  @SpeakeasyMetadata({ data: "json, name=backgroundBottom" })
  backgroundBottom?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundText" })
  backgroundText?: string;

  @SpeakeasyMetadata({ data: "json, name=backgroundTop" })
  backgroundTop?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=linkActive" })
  linkActive?: string;

  @SpeakeasyMetadata({ data: "json, name=linkHover" })
  linkHover?: string;

  @SpeakeasyMetadata({ data: "json, name=playerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeAspect" })
  shapeAspect?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeBackgroundBottom" })
  shapeBackgroundBottom?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeBackgroundTop" })
  shapeBackgroundTop?: string;

  @SpeakeasyMetadata({ data: "json, name=shapeMargin" })
  shapeMargin?: number;

  @SpeakeasyMetadata({ data: "json, name=shapeRadius" })
  shapeRadius?: number;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=trackBackground" })
  trackBackground?: string;

  @SpeakeasyMetadata({ data: "json, name=trackPlayed" })
  trackPlayed?: string;

  @SpeakeasyMetadata({ data: "json, name=trackUnplayed" })
  trackUnplayed?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedAt" })
  updatedAt?: Date;
}
