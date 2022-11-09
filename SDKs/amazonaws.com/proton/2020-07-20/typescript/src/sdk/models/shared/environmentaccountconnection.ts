import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";


// EnvironmentAccountConnection
/** 
 * The environment account connection detail data.
**/
export class EnvironmentAccountConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=arn" })
  arn: string;

  @Metadata({ data: "json, name=environmentAccountId" })
  environmentAccountId: string;

  @Metadata({ data: "json, name=environmentName" })
  environmentName: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=lastModifiedAt" })
  lastModifiedAt: Date;

  @Metadata({ data: "json, name=managementAccountId" })
  managementAccountId: string;

  @Metadata({ data: "json, name=requestedAt" })
  requestedAt: Date;

  @Metadata({ data: "json, name=roleArn" })
  roleArn: string;

  @Metadata({ data: "json, name=status" })
  status: EnvironmentAccountConnectionStatusEnum;
}
