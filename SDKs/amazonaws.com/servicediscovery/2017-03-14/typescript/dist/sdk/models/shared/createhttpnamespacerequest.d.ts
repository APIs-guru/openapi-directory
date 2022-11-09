import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Tag } from "./tag";
export declare class CreateHttpNamespaceRequest extends SpeakeasyBase {
    creatorRequestId?: string;
    description?: string;
    name: string;
    tags?: Tag[];
}
