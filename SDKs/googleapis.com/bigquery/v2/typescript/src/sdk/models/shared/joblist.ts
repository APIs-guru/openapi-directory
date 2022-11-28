import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JobConfiguration } from "./jobconfiguration";
import { ErrorProto } from "./errorproto";
import { JobReference } from "./jobreference";
import { JobStatistics } from "./jobstatistics";
import { JobStatus } from "./jobstatus";



export class JobListJobs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=configuration" })
  configuration?: JobConfiguration;

  @SpeakeasyMetadata({ data: "json, name=errorResult" })
  errorResult?: ErrorProto;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=jobReference" })
  jobReference?: JobReference;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: JobStatistics;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: JobStatus;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail?: string;
}


export class JobList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=jobs", elemType: JobListJobs })
  jobs?: JobListJobs[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
