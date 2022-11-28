import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JobSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_name" })
  companyName: string;
}


export class JobSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: JobSearchallReadPathParams;
}


export class JobSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
