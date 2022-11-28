import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListRegexMatchSetsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
