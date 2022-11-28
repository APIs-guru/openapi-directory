import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleAssignment } from "./roleassignment";



export class RoleAssignments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoleAssignment })
  items?: RoleAssignment[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
