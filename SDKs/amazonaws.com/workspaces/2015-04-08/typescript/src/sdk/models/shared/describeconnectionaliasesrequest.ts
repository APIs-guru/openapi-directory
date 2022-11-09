import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeConnectionAliasesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AliasIds" })
  aliasIds?: string[];

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
