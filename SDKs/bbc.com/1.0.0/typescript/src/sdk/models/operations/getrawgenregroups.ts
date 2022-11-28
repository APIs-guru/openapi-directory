import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetRawGenreGroupsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawGenreGroupsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRawGenreGroupsPathParams;
}


export class GetRawGenreGroupsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  nitro?: any;
}
