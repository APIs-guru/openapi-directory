import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListWebAcLsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextMarker" })
  nextMarker?: string;
}
