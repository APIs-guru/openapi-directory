import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { UserCompact } from "./usercompact";


export class StoryCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=created_by" })
  createdBy?: UserCompact;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=text" })
  text?: string;
}
