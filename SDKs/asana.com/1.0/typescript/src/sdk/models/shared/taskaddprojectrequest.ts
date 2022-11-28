import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskAddProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "json, name=section" })
  section?: string;
}
