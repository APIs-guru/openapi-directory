import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetTheStatusOfTheApiService200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: boolean;
}


export class GetTheStatusOfTheApiServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getTheStatusOfTheApiService200ApplicationJsonObject?: GetTheStatusOfTheApiService200ApplicationJson;

  @Metadata()
  statusCode: number;
}
