import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAutoSnapshotsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=resourceName" })
  resourceName: string;
}
