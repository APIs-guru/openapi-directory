import { SpeakeasyBase } from "../../../internal/utils";
import { ReplicationStatusType } from "./replicationstatustype";
export declare class CreateSecretResponse extends SpeakeasyBase {
    arn?: string;
    name?: string;
    replicationStatus?: ReplicationStatusType[];
    versionId?: string;
}
