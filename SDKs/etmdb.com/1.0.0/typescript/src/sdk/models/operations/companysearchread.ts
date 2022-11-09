import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanySearchReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=company_name" })
  companyName: string;
}


export class CompanySearchReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanySearchReadPathParams;
}


export class CompanySearchReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
