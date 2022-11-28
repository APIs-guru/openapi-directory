import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
/**
 * The UpdateTagsForDomainRequest includes the following elements.
**/
export declare class UpdateTagsForDomainRequest extends SpeakeasyBase {
    domainName: string;
    tagsToUpdate?: Tag[];
}
