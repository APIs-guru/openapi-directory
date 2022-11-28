import { SpeakeasyBase } from "../../../internal/utils";
import { SimpleUser } from "./simpleuser";
import { SecretScanningAlertStateEnum } from "./secretscanningalertstateenum";
export declare class SecretScanningAlert extends SpeakeasyBase {
    createdAt?: Date;
    htmlUrl?: string;
    number?: number;
    resolution?: string;
    resolvedAt?: Date;
    resolvedBy?: SimpleUser;
    secret?: string;
    secretType?: string;
    state?: SecretScanningAlertStateEnum;
    url?: string;
}
