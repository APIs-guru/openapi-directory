import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespaceSummary } from "./namespacesummary";
export declare class ListNamespacesResponse extends SpeakeasyBase {
    namespaces?: NamespaceSummary[];
    nextToken?: string;
}
