import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";



// EnvironmentAccountConnectionSummary
/** 
 * A summary of the environment account connection detail data.
**/
export class EnvironmentAccountConnectionSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=arn" })
  arn: string;

  @SpeakeasyMetadata({ data: "json, name=environmentAccountId" })
  environmentAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=environmentName" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=managementAccountId" })
  managementAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=requestedAt" })
  requestedAt: Date;

  @SpeakeasyMetadata({ data: "json, name=roleArn" })
  roleArn: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: EnvironmentAccountConnectionStatusEnum;
}
