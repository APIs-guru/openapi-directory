import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListRetirableGrantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=Marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "json, name=RetiringPrincipal" })
  retiringPrincipal: string;
}
