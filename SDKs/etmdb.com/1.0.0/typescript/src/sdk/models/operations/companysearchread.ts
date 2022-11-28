import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanySearchReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=company_name" })
  companyName: string;
}


export class CompanySearchReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanySearchReadPathParams;
}


export class CompanySearchReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
