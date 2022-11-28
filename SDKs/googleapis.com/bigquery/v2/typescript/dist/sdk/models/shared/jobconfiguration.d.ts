import { SpeakeasyBase } from "../../../internal/utils";
import { JobConfigurationTableCopy } from "./jobconfigurationtablecopy";
import { JobConfigurationExtract } from "./jobconfigurationextract";
import { JobConfigurationLoad } from "./jobconfigurationload";
import { JobConfigurationQuery } from "./jobconfigurationquery";
export declare class JobConfiguration extends SpeakeasyBase {
    copy?: JobConfigurationTableCopy;
    dryRun?: boolean;
    extract?: JobConfigurationExtract;
    jobTimeoutMs?: string;
    jobType?: string;
    labels?: Map<string, string>;
    load?: JobConfigurationLoad;
    query?: JobConfigurationQuery;
}
