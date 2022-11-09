import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MaterializedViewDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableRefresh" })
  enableRefresh?: boolean;

  @Metadata({ data: "json, name=lastRefreshTime" })
  lastRefreshTime?: string;

  @Metadata({ data: "json, name=maxStaleness" })
  maxStaleness?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;

  @Metadata({ data: "json, name=refreshIntervalMs" })
  refreshIntervalMs?: string;
}
