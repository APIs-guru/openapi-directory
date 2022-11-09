import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ResolverQueryLogConfig } from "./resolverquerylogconfig";


export class ListResolverQueryLogConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ResolverQueryLogConfigs", elemType: shared.ResolverQueryLogConfig })
  resolverQueryLogConfigs?: ResolverQueryLogConfig[];

  @Metadata({ data: "json, name=TotalCount" })
  totalCount?: number;

  @Metadata({ data: "json, name=TotalFilteredCount" })
  totalFilteredCount?: number;
}
