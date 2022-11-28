import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteQueryDefinitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=queryDefinitionId" })
  queryDefinitionId: string;
}
