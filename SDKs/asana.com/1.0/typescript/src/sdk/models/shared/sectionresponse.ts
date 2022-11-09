import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectCompact } from "./projectcompact";
import { ProjectCompact } from "./projectcompact";


export class SectionResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @Metadata({ data: "json, name=projects", elemType: shared.ProjectCompact })
  projects?: ProjectCompact[];

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
