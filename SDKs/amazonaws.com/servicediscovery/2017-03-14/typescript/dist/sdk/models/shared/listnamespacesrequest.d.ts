import { SpeakeasyBase } from "../../../internal/utils";
import { NamespaceFilter } from "./namespacefilter";
export declare class ListNamespacesRequest extends SpeakeasyBase {
    filters?: NamespaceFilter[];
    maxResults?: number;
    nextToken?: string;
}
