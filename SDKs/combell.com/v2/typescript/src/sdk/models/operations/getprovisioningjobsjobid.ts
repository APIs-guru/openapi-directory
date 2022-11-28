import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetProvisioningjobsJobIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=jobId" })
  jobId: string;
}


export class GetProvisioningjobsJobIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=job_id" })
  jobId: string;
}


export class GetProvisioningjobsJobIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetProvisioningjobsJobIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetProvisioningjobsJobIdQueryParams;
}


export class GetProvisioningjobsJobIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  provisioningJobCompletion?: shared.ProvisioningJobCompletion;

  @SpeakeasyMetadata()
  provisioningJobInfo?: shared.ProvisioningJobInfo;

  @SpeakeasyMetadata()
  statusCode: number;
}
