import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { QueryDefinition } from "./querydefinition";



export class DescribeQueryDefinitionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=queryDefinitions", elemType: QueryDefinition })
  queryDefinitions?: QueryDefinition[];
}
