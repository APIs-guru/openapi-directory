import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LogsFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=connector_id" })
  connectorId?: string;

  @Metadata({ data: "queryParam, name=exclude_unified_apis" })
  excludeUnifiedApis?: string;

  @Metadata({ data: "queryParam, name=status_code" })
  statusCode?: number;
}
