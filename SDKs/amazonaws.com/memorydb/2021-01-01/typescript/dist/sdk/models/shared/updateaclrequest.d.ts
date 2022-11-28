import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateAclRequest extends SpeakeasyBase {
    aclName: string;
    userNamesToAdd?: string[];
    userNamesToRemove?: string[];
}
