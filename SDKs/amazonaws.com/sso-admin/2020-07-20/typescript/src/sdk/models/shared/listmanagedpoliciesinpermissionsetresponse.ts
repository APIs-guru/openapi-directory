import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AttachedManagedPolicy } from "./attachedmanagedpolicy";



export class ListManagedPoliciesInPermissionSetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AttachedManagedPolicies", elemType: AttachedManagedPolicy })
  attachedManagedPolicies?: AttachedManagedPolicy[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
