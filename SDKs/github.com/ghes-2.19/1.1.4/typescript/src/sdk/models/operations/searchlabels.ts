import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchLabelsSortEnum {
    Created = "created"
,    Updated = "updated"
}


export class SearchLabelsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=repository_id" })
  repositoryId: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchLabelsSortEnum;
}


export class SearchLabelsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchLabelsQueryParams;
}


export class SearchLabels200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @Metadata({ data: "json, name=items", elemType: shared.LabelSearchResultItem })
  items: shared.LabelSearchResultItem[];

  @Metadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchLabelsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  basicError?: shared.BasicError;

  @Metadata()
  searchLabels200ApplicationJsonObject?: SearchLabels200ApplicationJson;

  @Metadata()
  validationError?: shared.ValidationError;
}
