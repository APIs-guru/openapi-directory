import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstanceSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
