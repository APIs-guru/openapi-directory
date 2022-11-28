import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StromkontoLoginRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;
}

export enum StromkontoLogin200ApplicationJsonStatusEnum {
    Registered = "registered",
    Unregistered = "unregistered"
}


export class StromkontoLogin200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StromkontoLogin200ApplicationJsonStatusEnum;
}


export class StromkontoLoginRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: StromkontoLoginRequestBody;
}


export class StromkontoLoginResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stromkontoLogin200ApplicationJsonObject?: StromkontoLogin200ApplicationJson;
}
