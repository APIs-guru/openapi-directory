import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstanceSnapshotsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
