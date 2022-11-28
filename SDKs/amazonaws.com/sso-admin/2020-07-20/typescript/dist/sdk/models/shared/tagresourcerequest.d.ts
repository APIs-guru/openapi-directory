import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class TagResourceRequest extends SpeakeasyBase {
    instanceArn: string;
    resourceArn: string;
    tags: Tag[];
}
