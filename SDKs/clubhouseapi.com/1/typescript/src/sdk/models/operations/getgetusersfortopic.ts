import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetGetUsersForTopicQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=topic_id" })
  topicId?: number;
}


export class GetGetUsersForTopicRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGetUsersForTopicQueryParams;
}


export class GetGetUsersForTopicResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
