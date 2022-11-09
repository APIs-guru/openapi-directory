import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListTagsForResourceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextMarker" })
  nextMarker?: string;

  @Metadata({ data: "json, name=ResourceARN" })
  resourceArn: string;
}
