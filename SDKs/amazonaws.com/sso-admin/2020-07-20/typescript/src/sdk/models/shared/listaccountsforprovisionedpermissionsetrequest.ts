import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningStatusEnum } from "./provisioningstatusenum";



export class ListAccountsForProvisionedPermissionSetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=PermissionSetArn" })
  permissionSetArn: string;

  @SpeakeasyMetadata({ data: "json, name=ProvisioningStatus" })
  provisioningStatus?: ProvisioningStatusEnum;
}
