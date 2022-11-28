import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";



export class VideoUpdatePayload extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=metadata", elemType: Metadata })
  metadata?: Metadata[];

  @SpeakeasyMetadata({ data: "json, name=mp4Support" })
  mp4Support?: boolean;

  @SpeakeasyMetadata({ data: "json, name=panoramic" })
  panoramic?: boolean;

  @SpeakeasyMetadata({ data: "json, name=playerId" })
  playerId?: string;

  @SpeakeasyMetadata({ data: "json, name=public" })
  public?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
