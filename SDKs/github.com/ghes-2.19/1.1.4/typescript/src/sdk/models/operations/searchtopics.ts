import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchTopicsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;
}


export class SearchTopicsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchTopicsQueryParams;
}


export class SearchTopics200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @Metadata({ data: "json, name=items", elemType: shared.TopicSearchResultItem })
  items: shared.TopicSearchResultItem[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchTopics415ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentation_url" })
  documentationUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;
}


export class SearchTopicsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  searchTopics200ApplicationJsonObject?: SearchTopics200ApplicationJson;

  @Metadata()
  searchTopics415ApplicationJsonObject?: SearchTopics415ApplicationJson;
}
