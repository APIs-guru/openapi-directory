import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StromkontoRegisterRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=first_name" })
  firstName?: string;

  @Metadata({ data: "json, name=last_name" })
  lastName?: string;

  @Metadata({ data: "json, name=zipcode" })
  zipcode?: string;
}


export class StromkontoRegisterRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: StromkontoRegisterRequestBody;
}


export class StromkontoRegisterResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
