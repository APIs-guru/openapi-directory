import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetVideoCaptionsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: any;
}


export class GetVideoCaptions200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: any[];

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}


export class GetVideoCaptionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVideoCaptionsPathParams;
}


export class GetVideoCaptionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getVideoCaptions200ApplicationJsonObject?: GetVideoCaptions200ApplicationJson;
}
