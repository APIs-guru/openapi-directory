import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PublicDnsNamespaceChange } from "./publicdnsnamespacechange";
export declare class UpdatePublicDnsNamespaceRequest extends SpeakeasyBase {
    id: string;
    namespace: PublicDnsNamespaceChange;
    updaterRequestId?: string;
}
