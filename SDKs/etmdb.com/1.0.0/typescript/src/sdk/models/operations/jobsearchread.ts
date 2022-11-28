import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobSearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=job_title" })
  jobTitle: string;
}


export class JobSearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobSearchReadPathParams;
}


export class JobSearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
