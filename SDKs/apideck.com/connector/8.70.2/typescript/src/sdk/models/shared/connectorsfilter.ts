import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";


export class ConnectorsFilter extends SpeakeasyBase {
  @Metadata({ data: "queryParam, name=status" })
  status?: ConnectorStatusEnum;

  @Metadata({ data: "queryParam, name=unified_api" })
  unifiedApi?: UnifiedApiIdEnum;
}
