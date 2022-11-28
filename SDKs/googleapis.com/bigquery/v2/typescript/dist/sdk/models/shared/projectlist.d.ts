import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectReference } from "./projectreference";
export declare class ProjectListProjects extends SpeakeasyBase {
    friendlyName?: string;
    id?: string;
    kind?: string;
    numericId?: string;
    projectReference?: ProjectReference;
}
export declare class ProjectList extends SpeakeasyBase {
    etag?: string;
    kind?: string;
    nextPageToken?: string;
    projects?: ProjectListProjects[];
    totalItems?: number;
}
