import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
export declare class Event extends SpeakeasyBase {
    date?: Date;
    eventCategories?: string[];
    message?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}
