import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuittungTseDataQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class QuittungTseDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: QuittungTseDataQueryParams;
}


export class QuittungTseDataResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
