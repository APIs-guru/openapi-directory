import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetRawGenreGroupsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=pid" })
  pid: string;
}


export class GetRawGenreGroupsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRawGenreGroupsPathParams;
}


export class GetRawGenreGroupsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  nitro?: any;
}
