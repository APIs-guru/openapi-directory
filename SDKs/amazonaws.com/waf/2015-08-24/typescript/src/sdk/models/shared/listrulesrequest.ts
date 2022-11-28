import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListRulesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
