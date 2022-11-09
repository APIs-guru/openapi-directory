import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PutQueryDefinitionRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=logGroupNames" })
  logGroupNames?: string[];

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=queryDefinitionId" })
  queryDefinitionId?: string;

  @Metadata({ data: "json, name=queryString" })
  queryString: string;
}
