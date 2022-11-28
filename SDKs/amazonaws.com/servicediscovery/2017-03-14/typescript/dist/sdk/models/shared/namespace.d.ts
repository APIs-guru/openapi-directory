import { SpeakeasyBase } from "../../../internal/utils";
import { NamespaceProperties } from "./namespaceproperties";
import { NamespaceTypeEnum } from "./namespacetypeenum";
/**
 * A complex type that contains information about a specified namespace.
**/
export declare class Namespace extends SpeakeasyBase {
    arn?: string;
    createDate?: Date;
    creatorRequestId?: string;
    description?: string;
    id?: string;
    name?: string;
    properties?: NamespaceProperties;
    serviceCount?: number;
    type?: NamespaceTypeEnum;
}
