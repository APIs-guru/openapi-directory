import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
import { TenancyEnum } from "./tenancyenum";
export declare class RegisterWorkspaceDirectoryRequest extends SpeakeasyBase {
    directoryId: string;
    enableSelfService?: boolean;
    enableWorkDocs: boolean;
    subnetIds?: string[];
    tags?: Tag[];
    tenancy?: TenancyEnum;
}
