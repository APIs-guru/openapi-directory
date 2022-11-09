import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostContainersNameOrIdUnpausePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=name_or_id" })
  nameOrId: string;
}


export class PostContainersNameOrIdUnpauseHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostContainersNameOrIdUnpauseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostContainersNameOrIdUnpausePathParams;

  @Metadata()
  headers: PostContainersNameOrIdUnpauseHeaders;
}


export class PostContainersNameOrIdUnpauseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
