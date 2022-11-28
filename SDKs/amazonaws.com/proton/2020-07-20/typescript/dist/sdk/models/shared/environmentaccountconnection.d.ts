import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";
/**
 * The environment account connection detail data.
**/
export declare class EnvironmentAccountConnection extends SpeakeasyBase {
    arn: string;
    environmentAccountId: string;
    environmentName: string;
    id: string;
    lastModifiedAt: Date;
    managementAccountId: string;
    requestedAt: Date;
    roleArn: string;
    status: EnvironmentAccountConnectionStatusEnum;
}
