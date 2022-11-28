import { SpeakeasyBase } from "../../../internal/utils";
import { MinimalRepository } from "./minimalrepository";
import { SimpleCommitStatus } from "./simplecommitstatus";
/**
 * Combined Commit Status
**/
export declare class CombinedCommitStatus extends SpeakeasyBase {
    commitUrl: string;
    repository: MinimalRepository;
    sha: string;
    state: string;
    statuses: SimpleCommitStatus[];
    totalCount: number;
    url: string;
}
