import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StromkontoLoginRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;
}


export class StromkontoLoginRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: StromkontoLoginRequestBody;
}

export enum StromkontoLogin200ApplicationJsonStatusEnum {
    Registered = "registered"
,    Unregistered = "unregistered"
}


export class StromkontoLogin200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: StromkontoLogin200ApplicationJsonStatusEnum;
}


export class StromkontoLoginResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stromkontoLogin200ApplicationJsonObject?: StromkontoLogin200ApplicationJson;
}
