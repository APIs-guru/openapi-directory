import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRelationalDatabaseRequest extends SpeakeasyBase {
    finalRelationalDatabaseSnapshotName?: string;
    relationalDatabaseName: string;
    skipFinalSnapshot?: boolean;
}
