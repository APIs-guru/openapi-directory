import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProjectStatusCompact extends SpeakeasyBase {
  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
