import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryDefinition
/** 
 * This structure contains details about a saved CloudWatch Logs Insights query definition.
**/
export class QueryDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=lastModified" })
  lastModified?: number;

  @Metadata({ data: "json, name=logGroupNames" })
  logGroupNames?: string[];

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=queryDefinitionId" })
  queryDefinitionId?: string;

  @Metadata({ data: "json, name=queryString" })
  queryString?: string;
}
