import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDiskSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
