import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SectionTaskInsertRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @Metadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @Metadata({ data: "json, name=task" })
  task: string;
}
