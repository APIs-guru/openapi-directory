import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectReference } from "./projectreference";



export class ProjectListProjects extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=friendlyName" })
  friendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=numericId" })
  numericId?: string;

  @SpeakeasyMetadata({ data: "json, name=projectReference" })
  projectReference?: ProjectReference;
}


export class ProjectList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projects", elemType: ProjectListProjects })
  projects?: ProjectListProjects[];

  @SpeakeasyMetadata({ data: "json, name=totalItems" })
  totalItems?: number;
}
