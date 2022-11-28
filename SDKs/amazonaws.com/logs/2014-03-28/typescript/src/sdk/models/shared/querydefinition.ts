import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryDefinition
/** 
 * This structure contains details about a saved CloudWatch Logs Insights query definition.
**/
export class QueryDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=lastModified" })
  lastModified?: number;

  @SpeakeasyMetadata({ data: "json, name=logGroupNames" })
  logGroupNames?: string[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=queryDefinitionId" })
  queryDefinitionId?: string;

  @SpeakeasyMetadata({ data: "json, name=queryString" })
  queryString?: string;
}
