import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListRetirableGrantsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=Marker" })
  marker?: string;

  @Metadata({ data: "json, name=RetiringPrincipal" })
  retiringPrincipal: string;
}
