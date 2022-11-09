import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
/**
 * The body of a version resource. A version resource represents a collection of components, such as files and other data. This may correspond to a version in many package management schemes.
**/
export declare class Version extends SpeakeasyBase {
    createTime?: string;
    description?: string;
    metadata?: Map<string, any>;
    name?: string;
    relatedTags?: Tag[];
    updateTime?: string;
}
