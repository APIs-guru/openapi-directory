import { SpeakeasyBase } from "../../../internal/utils";
import { FolderConfiguration } from "./folderconfiguration";
export declare class PutRetentionPolicyRequest extends SpeakeasyBase {
    description?: string;
    folderConfigurations: FolderConfiguration[];
    id?: string;
    name: string;
    organizationId: string;
}
