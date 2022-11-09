import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentAccountConnectionRequesterAccountTypeEnum } from "./environmentaccountconnectionrequesteraccounttypeenum";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";


export class ListEnvironmentAccountConnectionsInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=environmentName" })
  environmentName?: string;

  @Metadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=requestedBy" })
  requestedBy: EnvironmentAccountConnectionRequesterAccountTypeEnum;

  @Metadata({ data: "json, name=statuses" })
  statuses?: EnvironmentAccountConnectionStatusEnum[];
}
