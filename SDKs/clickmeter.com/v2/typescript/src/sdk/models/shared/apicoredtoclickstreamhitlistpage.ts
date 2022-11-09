import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiCoreDtoClickStreamHit } from "./apicoredtoclickstreamhit";


export class ApiCoreDtoClickStreamHitListPage extends SpeakeasyBase {
  @Metadata({ data: "json, name=hits", elemType: shared.ApiCoreDtoClickStreamHit })
  hits?: ApiCoreDtoClickStreamHit[];

  @Metadata({ data: "json, name=lastKey" })
  lastKey?: string;
}
