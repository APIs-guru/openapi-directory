import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostBuildQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=nocache" })
  nocache?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pull" })
  pull?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=t" })
  t: string;
}


export class PostBuildHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostBuildRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostBuildQueryParams;

  @Metadata()
  headers: PostBuildHeaders;

  @Metadata({ data: "request, media_type=application/tar" })
  request: Uint8Array;
}


export class PostBuildResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
