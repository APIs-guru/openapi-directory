import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAutoSnapshotsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=resourceName" })
  resourceName: string;
}
