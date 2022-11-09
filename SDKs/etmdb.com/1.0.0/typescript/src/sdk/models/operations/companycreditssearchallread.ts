import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CompanyCreditsSearchallReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class CompanyCreditsSearchallReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CompanyCreditsSearchallReadPathParams;
}


export class CompanyCreditsSearchallReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
