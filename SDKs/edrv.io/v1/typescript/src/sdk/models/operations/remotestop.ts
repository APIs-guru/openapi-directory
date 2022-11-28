import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemotestopRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @SpeakeasyMetadata({ data: "json, name=driver" })
  driver?: string;

  @SpeakeasyMetadata({ data: "json, name=transaction" })
  transaction?: string;
}


export class RemotestopRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: RemotestopRequestBody;
}


export class RemotestopResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
