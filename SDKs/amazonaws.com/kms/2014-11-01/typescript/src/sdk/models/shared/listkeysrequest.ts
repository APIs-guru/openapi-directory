import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListKeysRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;
}
