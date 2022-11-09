import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AttachedManagedPolicy } from "./attachedmanagedpolicy";


export class ListManagedPoliciesInPermissionSetResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=AttachedManagedPolicies", elemType: shared.AttachedManagedPolicy })
  attachedManagedPolicies?: AttachedManagedPolicy[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
