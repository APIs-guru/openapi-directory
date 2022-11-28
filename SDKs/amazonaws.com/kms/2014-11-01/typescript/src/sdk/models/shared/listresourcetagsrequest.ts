import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListResourceTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=KeyId" })
  keyId: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;
}
