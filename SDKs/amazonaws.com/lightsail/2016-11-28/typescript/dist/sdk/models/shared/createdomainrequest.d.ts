import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class CreateDomainRequest extends SpeakeasyBase {
    domainName: string;
    tags?: Tag[];
}
