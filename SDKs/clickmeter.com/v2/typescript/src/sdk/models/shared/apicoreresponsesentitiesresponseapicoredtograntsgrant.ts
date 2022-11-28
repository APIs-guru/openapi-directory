import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiCoreDtoGrantsGrant } from "./apicoredtograntsgrant";



export class ApiCoreResponsesEntitiesResponseApiCoreDtoGrantsGrant extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: ApiCoreDtoGrantsGrant })
  entities?: ApiCoreDtoGrantsGrant[];
}
