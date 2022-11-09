import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListManagedPoliciesInPermissionSetRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;
}
