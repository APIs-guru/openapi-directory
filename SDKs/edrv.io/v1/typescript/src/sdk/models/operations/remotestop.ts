import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemotestopRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=chargestation" })
  chargestation?: string;

  @Metadata({ data: "json, name=driver" })
  driver?: string;

  @Metadata({ data: "json, name=transaction" })
  transaction?: string;
}


export class RemotestopRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: RemotestopRequestBody;
}


export class RemotestopResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
