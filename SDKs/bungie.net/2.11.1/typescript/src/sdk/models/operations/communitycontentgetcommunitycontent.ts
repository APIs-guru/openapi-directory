import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CommunityContentGetCommunityContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=mediaFilter" })
  mediaFilter: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=page" })
  page: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=sort" })
  sort: number;
}


export class CommunityContentGetCommunityContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CommunityContentGetCommunityContentPathParams;
}


export class CommunityContentGetCommunityContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
