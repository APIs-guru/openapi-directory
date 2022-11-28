import { SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";
import { ColumnLfTag } from "./columnlftag";
export declare class GetResourceLfTagsResponse extends SpeakeasyBase {
    lfTagOnDatabase?: LfTagPair[];
    lfTagsOnColumns?: ColumnLfTag[];
    lfTagsOnTable?: LfTagPair[];
}
