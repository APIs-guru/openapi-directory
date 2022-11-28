import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Diff Entry
**/
export declare class DiffEntry extends SpeakeasyBase {
    additions: number;
    blobUrl: string;
    changes: number;
    contentsUrl: string;
    deletions: number;
    filename: string;
    patch?: string;
    previousFilename?: string;
    rawUrl: string;
    sha: string;
    status: string;
}
