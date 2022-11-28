import { SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";
import { ColumnLfTag } from "./columnlftag";
import { TableResource } from "./tableresource";
/**
 * A structure describing a table resource with tags.
**/
export declare class TaggedTable extends SpeakeasyBase {
    lfTagOnDatabase?: LfTagPair[];
    lfTagsOnColumns?: ColumnLfTag[];
    lfTagsOnTable?: LfTagPair[];
    table?: TableResource;
}
