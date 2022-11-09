import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JobSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=company_name" })
  companyName: string;
}


export class JobSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: JobSearchallReadPathParams;
}


export class JobSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
