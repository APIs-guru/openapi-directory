import { SpeakeasyBase } from "../../../internal/utils";
import { ConnectorStatusEnum } from "./connectorstatusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
export declare class ConnectorsFilter extends SpeakeasyBase {
    status?: ConnectorStatusEnum;
    unifiedApi?: UnifiedApiIdEnum;
}
