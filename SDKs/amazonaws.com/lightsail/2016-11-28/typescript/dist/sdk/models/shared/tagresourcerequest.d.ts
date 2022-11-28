import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class TagResourceRequest extends SpeakeasyBase {
    resourceArn?: string;
    resourceName: string;
    tags: Tag[];
}
