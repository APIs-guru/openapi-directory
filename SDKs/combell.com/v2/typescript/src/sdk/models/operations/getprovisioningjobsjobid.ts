import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProvisioningjobsJobIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetProvisioningjobsJobIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=job_id" })
  jobId: string;
}


export class GetProvisioningjobsJobIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProvisioningjobsJobIdPathParams;

  @Metadata()
  queryParams: GetProvisioningjobsJobIdQueryParams;
}


export class GetProvisioningjobsJobIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  provisioningJobCompletion?: shared.ProvisioningJobCompletion;

  @Metadata()
  provisioningJobInfo?: shared.ProvisioningJobInfo;

  @Metadata()
  statusCode: number;
}
