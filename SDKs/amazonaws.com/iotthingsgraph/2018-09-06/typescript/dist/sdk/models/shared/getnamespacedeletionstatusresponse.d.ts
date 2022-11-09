import { SpeakeasyBase } from "../../../internal/utils/utils";
import { NamespaceDeletionStatusErrorCodesEnum } from "./namespacedeletionstatuserrorcodesenum";
import { NamespaceDeletionStatusEnum } from "./namespacedeletionstatusenum";
export declare class GetNamespaceDeletionStatusResponse extends SpeakeasyBase {
    errorCode?: NamespaceDeletionStatusErrorCodesEnum;
    errorMessage?: string;
    namespaceArn?: string;
    namespaceName?: string;
    status?: NamespaceDeletionStatusEnum;
}
