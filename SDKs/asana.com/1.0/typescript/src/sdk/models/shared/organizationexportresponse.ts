import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WorkspaceCompact } from "./workspacecompact";


export enum OrganizationExportResponseStateEnum {
    Pending = "pending",
    Started = "started",
    Finished = "finished",
    Error = "error"
}


export class OrganizationExportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gid" })
  gid?: string;

  @SpeakeasyMetadata({ data: "json, name=organization" })
  organization?: WorkspaceCompact;

  @SpeakeasyMetadata({ data: "json, name=resource_type" })
  resourceType?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: OrganizationExportResponseStateEnum;
}
