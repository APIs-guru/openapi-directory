import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TaskSetParentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=insert_after" })
  insertAfter?: string;

  @SpeakeasyMetadata({ data: "json, name=insert_before" })
  insertBefore?: string;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent: string;
}
