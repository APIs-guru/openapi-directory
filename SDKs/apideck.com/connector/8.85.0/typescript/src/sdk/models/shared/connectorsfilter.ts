import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";



export class ConnectorsFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, name=status" })
  status?: ConnectorStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, name=unified_api" })
  unifiedApi?: UnifiedApiIdEnum;
}
