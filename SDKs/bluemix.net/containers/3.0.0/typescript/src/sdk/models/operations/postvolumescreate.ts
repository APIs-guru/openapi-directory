import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostVolumesCreateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fsName" })
  fsName?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class PostVolumesCreateHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @Metadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class PostVolumesCreateRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostVolumesCreateQueryParams;

  @Metadata()
  headers: PostVolumesCreateHeaders;
}


export class PostVolumesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  volume?: any;
}
