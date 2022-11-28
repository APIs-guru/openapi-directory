import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QuittungComitRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account" })
  account?: string;
}


export class QuittungComitRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: QuittungComitRequestBody;
}


export class QuittungComitResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  quittungComit200ApplicationJsonString?: string;
}
