import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuittungTsEsignatureQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class QuittungTsEsignatureRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: QuittungTsEsignatureQueryParams;
}


export class QuittungTsEsignatureResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
