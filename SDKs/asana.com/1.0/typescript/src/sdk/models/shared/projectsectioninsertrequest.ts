import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProjectSectionInsertRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=after_section" })
  afterSection?: string;

  @Metadata({ data: "json, name=before_section" })
  beforeSection?: string;

  @Metadata({ data: "json, name=project" })
  project: string;

  @Metadata({ data: "json, name=section" })
  section: string;
}
