import { SpeakeasyBase } from "../../../internal/utils/utils";
import { HttpNamespaceChange } from "./httpnamespacechange";
export declare class UpdateHttpNamespaceRequest extends SpeakeasyBase {
    id: string;
    namespace: HttpNamespaceChange;
    updaterRequestId?: string;
}
