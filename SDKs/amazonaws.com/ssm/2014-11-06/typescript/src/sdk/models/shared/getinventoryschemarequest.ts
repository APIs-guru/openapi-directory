import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInventorySchemaRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Aggregator" })
  aggregator?: boolean;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=SubType" })
  subType?: boolean;

  @Metadata({ data: "json, name=TypeName" })
  typeName?: string;
}
