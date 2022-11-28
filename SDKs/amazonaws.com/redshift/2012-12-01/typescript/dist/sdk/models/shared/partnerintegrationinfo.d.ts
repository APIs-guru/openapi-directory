import { SpeakeasyBase } from "../../../internal/utils";
import { PartnerIntegrationStatusEnum } from "./partnerintegrationstatusenum";
/**
 * Describes a partner integration.
**/
export declare class PartnerIntegrationInfo extends SpeakeasyBase {
    createdAt?: Date;
    databaseName?: string;
    partnerName?: string;
    status?: PartnerIntegrationStatusEnum;
    statusMessage?: string;
    updatedAt?: Date;
}
