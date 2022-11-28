import { SpeakeasyBase } from "../../../internal/utils";
import { SourceTypeEnum } from "./sourcetypeenum";
/**
 *  This data type is used as a response element in the <code>DescribeEvents</code> action.
**/
export declare class Event extends SpeakeasyBase {
    date?: Date;
    eventCategories?: string[];
    message?: string;
    sourceArn?: string;
    sourceIdentifier?: string;
    sourceType?: SourceTypeEnum;
}
