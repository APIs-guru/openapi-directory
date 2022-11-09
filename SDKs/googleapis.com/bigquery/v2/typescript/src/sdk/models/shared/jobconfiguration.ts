import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfigurationTableCopy } from "./jobconfigurationtablecopy";
import { JobConfigurationExtract } from "./jobconfigurationextract";
import { JobConfigurationLoad } from "./jobconfigurationload";
import { JobConfigurationQuery } from "./jobconfigurationquery";


export class JobConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=copy" })
  copy?: JobConfigurationTableCopy;

  @Metadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @Metadata({ data: "json, name=extract" })
  extract?: JobConfigurationExtract;

  @Metadata({ data: "json, name=jobTimeoutMs" })
  jobTimeoutMs?: string;

  @Metadata({ data: "json, name=jobType" })
  jobType?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=load" })
  load?: JobConfigurationLoad;

  @Metadata({ data: "json, name=query" })
  query?: JobConfigurationQuery;
}
