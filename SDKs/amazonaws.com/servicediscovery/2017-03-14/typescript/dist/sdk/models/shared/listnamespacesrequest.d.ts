import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespaceFilter } from "./namespacefilter";
export declare class ListNamespacesRequest extends SpeakeasyBase {
    filters?: NamespaceFilter[];
    maxResults?: number;
    nextToken?: string;
}
