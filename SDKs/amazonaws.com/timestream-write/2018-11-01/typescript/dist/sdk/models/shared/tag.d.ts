import { SpeakeasyBase } from "../../../internal/utils";
/**
 *  A tag is a label that you assign to a Timestream database and/or table. Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize databases and/or tables, for example, by purpose, owner, or environment.
**/
export declare class Tag extends SpeakeasyBase {
    key: string;
    value: string;
}
