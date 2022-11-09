import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProvisioningStatusEnum } from "./provisioningstatusenum";


export class ListPermissionSetsProvisionedToAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=AccountId" })
  accountId: string;

  @Metadata({ data: "json, name=InstanceArn" })
  instanceArn: string;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=ProvisioningStatus" })
  provisioningStatus?: ProvisioningStatusEnum;
}
