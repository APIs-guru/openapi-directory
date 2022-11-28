import { SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceCompact } from "./workspacecompact";
export declare enum OrganizationExportResponseStateEnum {
    Pending = "pending",
    Started = "started",
    Finished = "finished",
    Error = "error"
}
export declare class OrganizationExportResponse extends SpeakeasyBase {
    createdAt?: Date;
    downloadUrl?: string;
    gid?: string;
    organization?: WorkspaceCompact;
    resourceType?: string;
    state?: OrganizationExportResponseStateEnum;
}
