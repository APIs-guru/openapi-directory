import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobSearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=job_title" })
  jobTitle: string;
}


export class JobSearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobSearchReadPathParams;
}


export class JobSearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
