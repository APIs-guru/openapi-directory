import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobConfigurationTableCopy } from "./jobconfigurationtablecopy";
import { JobConfigurationExtract } from "./jobconfigurationextract";
import { JobConfigurationLoad } from "./jobconfigurationload";
import { JobConfigurationQuery } from "./jobconfigurationquery";



export class JobConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=copy" })
  copy?: JobConfigurationTableCopy;

  @SpeakeasyMetadata({ data: "json, name=dryRun" })
  dryRun?: boolean;

  @SpeakeasyMetadata({ data: "json, name=extract" })
  extract?: JobConfigurationExtract;

  @SpeakeasyMetadata({ data: "json, name=jobTimeoutMs" })
  jobTimeoutMs?: string;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=load" })
  load?: JobConfigurationLoad;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: JobConfigurationQuery;
}
