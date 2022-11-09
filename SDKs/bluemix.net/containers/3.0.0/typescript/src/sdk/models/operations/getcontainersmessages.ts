import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetContainersMessagesHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersMessagesRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetContainersMessagesHeaders;
}


export class GetContainersMessages200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_date" })
  createdDate?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class GetContainersMessagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getContainersMessages200ApplicationJsonObject?: GetContainersMessages200ApplicationJson;

  @Metadata()
  statusCode: number;
}
