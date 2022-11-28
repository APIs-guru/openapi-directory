import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class ListResourceTagsResponse extends SpeakeasyBase {
    nextMarker?: string;
    tags?: Tag[];
    truncated?: boolean;
}
