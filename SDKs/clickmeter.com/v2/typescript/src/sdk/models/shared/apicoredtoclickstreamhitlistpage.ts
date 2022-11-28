import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoClickStreamHit } from "./apicoredtoclickstreamhit";



export class ApiCoreDtoClickStreamHitListPage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hits", elemType: ApiCoreDtoClickStreamHit })
  hits?: ApiCoreDtoClickStreamHit[];

  @SpeakeasyMetadata({ data: "json, name=lastKey" })
  lastKey?: string;
}
