import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostBuildQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=nocache" })
  nocache?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pull" })
  pull?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=t" })
  t: string;
}


export class PostBuildHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostBuildRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostBuildQueryParams;

  @SpeakeasyMetadata()
  headers: PostBuildHeaders;

  @SpeakeasyMetadata({ data: "request, media_type=application/tar" })
  request: Uint8Array;
}


export class PostBuildResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
