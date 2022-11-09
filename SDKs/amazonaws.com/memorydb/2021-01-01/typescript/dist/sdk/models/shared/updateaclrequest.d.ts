import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class UpdateAclRequest extends SpeakeasyBase {
    aclName: string;
    userNamesToAdd?: string[];
    userNamesToRemove?: string[];
}
