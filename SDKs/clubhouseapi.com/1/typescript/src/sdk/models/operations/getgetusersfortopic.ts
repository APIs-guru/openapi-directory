import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGetUsersForTopicQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=topic_id" })
  topicId?: number;
}


export class GetGetUsersForTopicRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetGetUsersForTopicQueryParams;
}


export class GetGetUsersForTopicResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
