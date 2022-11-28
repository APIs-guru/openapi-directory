import { SpeakeasyBase } from "../../../internal/utils";
import { PrivateDnsNamespaceChange } from "./privatednsnamespacechange";
export declare class UpdatePrivateDnsNamespaceRequest extends SpeakeasyBase {
    id: string;
    namespace: PrivateDnsNamespaceChange;
    updaterRequestId?: string;
}
