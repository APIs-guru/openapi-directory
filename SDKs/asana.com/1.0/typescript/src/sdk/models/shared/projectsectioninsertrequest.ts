import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProjectSectionInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=after_section" })
  afterSection?: string;

  @SpeakeasyMetadata({ data: "json, name=before_section" })
  beforeSection?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section: string;
}
