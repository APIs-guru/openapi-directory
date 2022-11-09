import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WorkspaceCompact } from "./workspacecompact";

export enum OrganizationExportResponseStateEnum {
    Pending = "pending"
,    Started = "started"
,    Finished = "finished"
,    Error = "error"
}


export class OrganizationExportResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=gid" })
  gid?: string;

  @Metadata({ data: "json, name=organization" })
  organization?: WorkspaceCompact;

  @Metadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @Metadata({ data: "json, name=state" })
  state?: OrganizationExportResponseStateEnum;
}
