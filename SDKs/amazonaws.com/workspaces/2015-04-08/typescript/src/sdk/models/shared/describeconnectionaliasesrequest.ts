import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeConnectionAliasesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AliasIds" })
  aliasIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}
