import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCloudFormationStackRecordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
