import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
