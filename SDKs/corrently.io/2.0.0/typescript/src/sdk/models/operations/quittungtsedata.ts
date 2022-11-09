import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuittungTseDataQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class QuittungTseDataRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: QuittungTseDataQueryParams;
}


export class QuittungTseDataResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
