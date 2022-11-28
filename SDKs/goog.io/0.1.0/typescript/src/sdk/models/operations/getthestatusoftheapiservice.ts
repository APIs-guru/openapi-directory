import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTheStatusOfTheApiService200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;
}


export class GetTheStatusOfTheApiServiceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getTheStatusOfTheApiService200ApplicationJsonObject?: GetTheStatusOfTheApiService200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
