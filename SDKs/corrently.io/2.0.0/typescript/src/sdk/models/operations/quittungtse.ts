import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuittungTseQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=account" })
  account?: string;
}


export class QuittungTseRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: QuittungTseQueryParams;
}


export class QuittungTse200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any;

  @Metadata({ data: "json, name=publickey" })
  publickey?: string;

  @Metadata({ data: "json, name=raw" })
  raw?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;
}


export class QuittungTseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  quittungTse200ApplicationJsonObject?: QuittungTse200ApplicationJson;
}
