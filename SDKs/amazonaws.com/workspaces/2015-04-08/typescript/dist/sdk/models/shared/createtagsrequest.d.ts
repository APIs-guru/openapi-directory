import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateTagsRequest extends SpeakeasyBase {
    resourceId: string;
    tags: Tag[];
}
