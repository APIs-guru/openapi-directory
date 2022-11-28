import { SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";
export declare class ListLfTagsResponse extends SpeakeasyBase {
    lfTags?: LfTagPair[];
    nextToken?: string;
}
