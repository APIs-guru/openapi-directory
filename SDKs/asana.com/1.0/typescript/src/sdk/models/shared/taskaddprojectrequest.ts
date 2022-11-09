import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TaskAddProjectRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @Metadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @Metadata({ data: "json, name=project" })
  project: string;

  @Metadata({ data: "json, name=section" })
  section?: string;
}
