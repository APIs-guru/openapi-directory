import { SpeakeasyBase } from "../../../internal/utils";
import { LfTagPair } from "./lftagpair";
import { Resource } from "./resource";
export declare class RemoveLfTagsFromResourceRequest extends SpeakeasyBase {
    catalogId?: string;
    lfTags: LfTagPair[];
    resource: Resource;
}
