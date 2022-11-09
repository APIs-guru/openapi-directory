import { SpeakeasyBase } from "../../../internal/utils/utils";
import { CurrencyEnum } from "./currencyenum";
export declare class PipelineStages extends SpeakeasyBase {
    displayOrder?: number;
    id?: string;
    name?: string;
    value?: string;
    winProbability?: number;
}
export declare class Pipeline extends SpeakeasyBase {
    archived?: boolean;
    createdAt?: Date;
    currency?: CurrencyEnum;
    displayOrder?: number;
    id?: string;
    name: string;
    stages?: PipelineStages[];
    updatedAt?: Date;
}
