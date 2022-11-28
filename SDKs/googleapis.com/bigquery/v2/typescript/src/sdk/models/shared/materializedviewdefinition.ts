import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MaterializedViewDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableRefresh" })
  enableRefresh?: boolean;

  @SpeakeasyMetadata({ data: "json, name=lastRefreshTime" })
  lastRefreshTime?: string;

  @SpeakeasyMetadata({ data: "json, name=maxStaleness" })
  maxStaleness?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;

  @SpeakeasyMetadata({ data: "json, name=refreshIntervalMs" })
  refreshIntervalMs?: string;
}
