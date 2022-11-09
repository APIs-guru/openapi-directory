import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCloudFormationStackRecordsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;
}
