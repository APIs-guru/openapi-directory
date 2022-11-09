import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Metadata } from "./metadata";


export class VideoUpdatePayload extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=metadata", elemType: shared.Metadata })
  metadata?: Metadata[];

  @Metadata({ data: "json, name=mp4Support" })
  mp4Support?: boolean;

  @Metadata({ data: "json, name=panoramic" })
  panoramic?: boolean;

  @Metadata({ data: "json, name=playerId" })
  playerId?: string;

  @Metadata({ data: "json, name=public" })
  public?: boolean;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=title" })
  title?: string;
}
