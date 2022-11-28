import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SectionTaskInsertRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=task" })
  task: string;
}
