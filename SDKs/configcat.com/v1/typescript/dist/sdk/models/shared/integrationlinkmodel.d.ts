import { SpeakeasyBase } from "../../../internal/utils";
import { IntegrationLinkTypeEnum } from "./integrationlinktypeenum";
export declare class IntegrationLinkModel extends SpeakeasyBase {
    description?: string;
    integrationLinkType?: IntegrationLinkTypeEnum;
    key?: string;
    url?: string;
}
