import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SearchTopicsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;
}


export class SearchTopics200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.TopicSearchResultItem })
  items: shared.TopicSearchResultItem[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchTopics415ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;
}


export class SearchTopicsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchTopicsQueryParams;
}


export class SearchTopicsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  searchTopics200ApplicationJsonObject?: SearchTopics200ApplicationJson;

  @SpeakeasyMetadata()
  searchTopics415ApplicationJsonObject?: SearchTopics415ApplicationJson;
}
