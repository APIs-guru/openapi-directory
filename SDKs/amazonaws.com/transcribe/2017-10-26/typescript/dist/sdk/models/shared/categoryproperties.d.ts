import { SpeakeasyBase } from "../../../internal/utils";
import { Rule } from "./rule";
/**
 * An object that contains the rules and additional information about a call analytics category.
**/
export declare class CategoryProperties extends SpeakeasyBase {
    categoryName?: string;
    createTime?: Date;
    lastUpdateTime?: Date;
    rules?: Rule[];
}
