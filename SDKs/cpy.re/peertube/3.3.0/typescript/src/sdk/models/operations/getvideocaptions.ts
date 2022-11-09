import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetVideoCaptionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class GetVideoCaptionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetVideoCaptionsPathParams;
}


export class GetVideoCaptions200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data?: any[];

  @Metadata({ data: "json, name=total" })
  total?: number;
}


export class GetVideoCaptionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getVideoCaptions200ApplicationJsonObject?: GetVideoCaptions200ApplicationJson;
}
