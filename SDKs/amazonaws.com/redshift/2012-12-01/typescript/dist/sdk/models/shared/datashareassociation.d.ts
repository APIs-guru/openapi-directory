import { SpeakeasyBase } from "../../../internal/utils";
import { DataShareStatusEnum } from "./datasharestatusenum";
/**
 * The association of a datashare from a producer account with a data consumer.
**/
export declare class DataShareAssociation extends SpeakeasyBase {
    consumerIdentifier?: string;
    createdDate?: Date;
    status?: DataShareStatusEnum;
    statusChangeDate?: Date;
}
