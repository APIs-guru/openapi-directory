import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteQueryDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=queryDefinitionId" })
  queryDefinitionId: string;
}
