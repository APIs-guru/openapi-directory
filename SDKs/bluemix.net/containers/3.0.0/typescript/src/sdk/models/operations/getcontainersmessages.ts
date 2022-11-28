import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersMessagesHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersMessages200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_date" })
  createdDate?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class GetContainersMessagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetContainersMessagesHeaders;
}


export class GetContainersMessagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getContainersMessages200ApplicationJsonObject?: GetContainersMessages200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
