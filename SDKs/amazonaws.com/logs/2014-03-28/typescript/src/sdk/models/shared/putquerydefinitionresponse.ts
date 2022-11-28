import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutQueryDefinitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryDefinitionId" })
  queryDefinitionId?: string;
}
