import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachmentCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=resource_subtype" })
  resourceSubtype?: any;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
