import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ForumGetPostAndParentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=childPostId" })
  childPostId: number;
}


export class ForumGetPostAndParentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=showbanned" })
  showbanned?: string;
}


export class ForumGetPostAndParentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ForumGetPostAndParentPathParams;

  @Metadata()
  queryParams: ForumGetPostAndParentQueryParams;
}


export class ForumGetPostAndParentResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
