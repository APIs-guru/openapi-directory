import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RoleAssignment
/** 
 * Defines an assignment of a role.
**/
export class RoleAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=assignedTo" })
  assignedTo?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=orgUnitId" })
  orgUnitId?: string;

  @Metadata({ data: "json, name=roleAssignmentId" })
  roleAssignmentId?: string;

  @Metadata({ data: "json, name=roleId" })
  roleId?: string;

  @Metadata({ data: "json, name=scopeType" })
  scopeType?: string;
}
