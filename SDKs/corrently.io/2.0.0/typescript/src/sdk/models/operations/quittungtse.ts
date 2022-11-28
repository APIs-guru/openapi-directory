import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuittungTseQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class QuittungTse200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any;

  @SpeakeasyMetadata({ data: "json, name=publickey" })
  publickey?: string;

  @SpeakeasyMetadata({ data: "json, name=raw" })
  raw?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;
}


export class QuittungTseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: QuittungTseQueryParams;
}


export class QuittungTseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  quittungTse200ApplicationJsonObject?: QuittungTse200ApplicationJson;
}
