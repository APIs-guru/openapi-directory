import { SpeakeasyBase } from "../../../internal/utils";
import { EnvironmentAccountConnectionStatusEnum } from "./environmentaccountconnectionstatusenum";
/**
 * A summary of the environment account connection detail data.
**/
export declare class EnvironmentAccountConnectionSummary extends SpeakeasyBase {
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
