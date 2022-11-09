import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ProjectReference } from "./projectreference";


export class ProjectListProjects extends SpeakeasyBase {
  @Metadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=numericId" })
  numericId?: string;

  @Metadata({ data: "json, name=projectReference" })
  projectReference?: ProjectReference;
}


export class ProjectList extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=projects", elemType: shared.ProjectListProjects })
  projects?: ProjectListProjects[];

  @Metadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
