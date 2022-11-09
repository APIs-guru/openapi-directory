import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { JobConfiguration } from "./jobconfiguration";
import { JobReference } from "./jobreference";
import { JobStatistics } from "./jobstatistics";
import { JobStatus } from "./jobstatus";


export class Job extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: JobConfiguration;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobReference" })
  jobReference?: JobReference;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;

  @Metadata({ data: "json, name=statistics" })
  statistics?: JobStatistics;

  @Metadata({ data: "json, name=status" })
  status?: JobStatus;

  @Metadata({ data: "json, name=user_email" })
  userEmail?: string;
}
