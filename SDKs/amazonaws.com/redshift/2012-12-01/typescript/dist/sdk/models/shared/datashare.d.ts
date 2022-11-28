import { SpeakeasyBase } from "../../../internal/utils";
import { DataShareAssociation } from "./datashareassociation";
export declare class DataShare extends SpeakeasyBase {
    allowPubliclyAccessibleConsumers?: boolean;
    dataShareArn?: string;
    dataShareAssociations?: DataShareAssociation[];
    producerArn?: string;
}
