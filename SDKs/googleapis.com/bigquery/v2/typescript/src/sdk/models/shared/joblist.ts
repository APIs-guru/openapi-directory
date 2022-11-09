import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { JobConfiguration } from "./jobconfiguration";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { JobStatistics } from "./jobstatistics";
import { JobStatus } from "./jobstatus";


export class JobListJobs extends SpeakeasyBase {
  @Metadata({ data: "json, name=configuration" })
  configuration?: JobConfiguration;

  @Metadata({ data: "json, name=errorResult" })
  errorResult?: ErrorProto;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=jobReference" })
  jobReference?: JobReference;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=state" })
  state?: string;

  @Metadata({ data: "json, name=statistics" })
  statistics?: JobStatistics;

  @Metadata({ data: "json, name=status" })
  status?: JobStatus;

  @Metadata({ data: "json, name=user_email" })
  userEmail?: string;
}


export class JobList extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=jobs", elemType: shared.JobListJobs })
  jobs?: JobListJobs[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
