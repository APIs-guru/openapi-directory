import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionRequesterAccountTypeEnum } from "./environmentaccountconnectionrequesteraccounttypeenum";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";



export class ListEnvironmentAccountConnectionsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=environmentName" })
  environmentName?: string;

  @SpeakeasyMetadata({ data: "json, name=maxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedBy" })
  requestedBy: EnvironmentAccountConnectionRequesterAccountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=statuses" })
  statuses?: EnvironmentAccountConnectionStatusEnum[];
}
