import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuittungZugferdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class QuittungZugferdRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: QuittungZugferdQueryParams;
}


export class QuittungZugferdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
