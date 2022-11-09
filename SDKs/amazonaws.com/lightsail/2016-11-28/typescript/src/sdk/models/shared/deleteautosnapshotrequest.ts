import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteAutoSnapshotRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: string;

  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}
