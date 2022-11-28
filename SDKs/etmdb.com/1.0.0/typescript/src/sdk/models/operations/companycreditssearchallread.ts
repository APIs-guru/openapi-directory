import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CompanyCreditsSearchallReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=param" })
  param: string;
}


export class CompanyCreditsSearchallReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CompanyCreditsSearchallReadPathParams;
}


export class CompanyCreditsSearchallReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
