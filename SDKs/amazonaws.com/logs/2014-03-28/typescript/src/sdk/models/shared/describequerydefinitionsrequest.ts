import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeQueryDefinitionsRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=queryDefinitionNamePrefix" })
  queryDefinitionNamePrefix?: string;
}
