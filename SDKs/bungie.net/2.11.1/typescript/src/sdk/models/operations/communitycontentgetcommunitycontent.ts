import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CommunityContentGetCommunityContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=mediaFilter" })
  mediaFilter: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=sort" })
  sort: number;
}


export class CommunityContentGetCommunityContentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CommunityContentGetCommunityContentPathParams;
}


export class CommunityContentGetCommunityContentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
