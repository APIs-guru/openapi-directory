import { SpeakeasyBase } from "../../../internal/utils/utils";
import { EnvironmentAccountConnectionRequesterAccountTypeEnum } from "./environmentaccountconnectionrequesteraccounttypeenum";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";
export declare class ListEnvironmentAccountConnectionsInput extends SpeakeasyBase {
    environmentName?: string;
    maxResults?: number;
    nextToken?: string;
    requestedBy: EnvironmentAccountConnectionRequesterAccountTypeEnum;
    statuses?: EnvironmentAccountConnectionStatusEnum[];
}
