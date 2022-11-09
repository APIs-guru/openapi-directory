import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class RestoreServerRequest extends SpeakeasyBase {
    backupId: string;
    instanceType?: string;
    keyPair?: string;
    serverName: string;
}
