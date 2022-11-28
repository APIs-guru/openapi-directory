import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LogsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=connector_id" })
  connectorId?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=exclude_unified_apis" })
  excludeUnifiedApis?: string;

  @SpeakeasyMetadata({ data: "queryParam, name=status_code" })
  statusCode?: number;
}
