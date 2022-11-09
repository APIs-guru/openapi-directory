import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuittungTsEsignatureQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class QuittungTsEsignatureRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: QuittungTsEsignatureQueryParams;
}


export class QuittungTsEsignatureResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
