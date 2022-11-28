import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectCompact } from "./projectcompact";



export class SectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project?: ProjectCompact;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: ProjectCompact })
  projects?: ProjectCompact[];

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;
}
