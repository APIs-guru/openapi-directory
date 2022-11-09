import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { QueryDefinition } from "./querydefinition";


export class DescribeQueryDefinitionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=queryDefinitions", elemType: shared.QueryDefinition })
  queryDefinitions?: QueryDefinition[];
}
