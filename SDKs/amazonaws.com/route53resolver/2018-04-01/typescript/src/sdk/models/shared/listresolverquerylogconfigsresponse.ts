import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResolverQueryLogConfig } from "./resolverquerylogconfig";



export class ListResolverQueryLogConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolverQueryLogConfigs", elemType: ResolverQueryLogConfig })
  resolverQueryLogConfigs?: ResolverQueryLogConfig[];

  @SpeakeasyMetadata({ data: "json, name=TotalCount" })
  totalCount?: number;

  @SpeakeasyMetadata({ data: "json, name=TotalFilteredCount" })
  totalFilteredCount?: number;
}
