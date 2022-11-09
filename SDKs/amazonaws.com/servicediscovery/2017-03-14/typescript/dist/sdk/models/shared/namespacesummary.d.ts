import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespaceProperties } from "./namespaceproperties";
import { NamespaceTypeEnum } from "./namespacetypeenum";
/**
 * A complex type that contains information about a namespace.
**/
export declare class NamespaceSummary extends SpeakeasyBase {
    arn?: string;
    createDate?: Date;
    description?: string;
    id?: string;
    name?: string;
    properties?: NamespaceProperties;
    serviceCount?: number;
    type?: NamespaceTypeEnum;
}
