import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicDnsNamespaceProperties } from "./publicdnsnamespaceproperties";
import { Tag } from "./tag";
export declare class CreatePublicDnsNamespaceRequest extends SpeakeasyBase {
    creatorRequestId?: string;
    description?: string;
    name: string;
    properties?: PublicDnsNamespaceProperties;
    tags?: Tag[];
}
