import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuittungZugferdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class QuittungZugferdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: QuittungZugferdQueryParams;
}


export class QuittungZugferdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
