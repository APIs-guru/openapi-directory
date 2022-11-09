import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class QuittungComitRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=account" })
  account?: string;
}


export class QuittungComitRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: QuittungComitRequestBody;
}


export class QuittungComitResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  quittungComit200ApplicationJsonString?: string;
}
