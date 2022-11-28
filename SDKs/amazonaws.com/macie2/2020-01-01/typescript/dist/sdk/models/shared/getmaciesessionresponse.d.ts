import { SpeakeasyBase } from "../../../internal/utils";
import { FindingPublishingFrequencyEnum } from "./findingpublishingfrequencyenum";
import { MacieStatusEnum } from "./maciestatusenum";
export declare class GetMacieSessionResponse extends SpeakeasyBase {
    createdAt?: Date;
    findingPublishingFrequency?: FindingPublishingFrequencyEnum;
    serviceRole?: string;
    status?: MacieStatusEnum;
    updatedAt?: Date;
}
