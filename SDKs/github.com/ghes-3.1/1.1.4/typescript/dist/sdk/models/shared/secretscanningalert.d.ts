import { SpeakeasyBase } from "../../../internal/utils";
import { SecretScanningAlertResolutionEnum } from "./secretscanningalertresolutionenum";
import { SimpleUser } from "./simpleuser";
import { SecretScanningAlertStateEnum } from "./secretscanningalertstateenum";
export declare class SecretScanningAlert extends SpeakeasyBase {
    createdAt?: Date;
    htmlUrl?: string;
    number?: number;
    resolution?: SecretScanningAlertResolutionEnum;
    resolvedAt?: Date;
    resolvedBy?: SimpleUser;
    secret?: string;
    secretType?: string;
    state?: SecretScanningAlertStateEnum;
    url?: string;
}
