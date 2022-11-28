import { SpeakeasyBase } from "../../../internal/utils";
import { OperatingSystem } from "./operatingsystem";
import { WorkspaceImageRequiredTenancyEnum } from "./workspaceimagerequiredtenancyenum";
import { WorkspaceImageStateEnum } from "./workspaceimagestateenum";
/**
 * Describes a WorkSpace image.
**/
export declare class WorkspaceImage extends SpeakeasyBase {
    created?: Date;
    description?: string;
    errorCode?: string;
    errorMessage?: string;
    imageId?: string;
    name?: string;
    operatingSystem?: OperatingSystem;
    ownerAccountId?: string;
    requiredTenancy?: WorkspaceImageRequiredTenancyEnum;
    state?: WorkspaceImageStateEnum;
}
