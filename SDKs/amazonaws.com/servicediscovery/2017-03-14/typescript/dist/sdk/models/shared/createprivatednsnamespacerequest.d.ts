import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PrivateDnsNamespaceProperties } from "./privatednsnamespaceproperties";
import { Tag } from "./tag";
export declare class CreatePrivateDnsNamespaceRequest extends SpeakeasyBase {
    creatorRequestId?: string;
    description?: string;
    name: string;
    properties?: PrivateDnsNamespaceProperties;
    tags?: Tag[];
    vpc: string;
}
