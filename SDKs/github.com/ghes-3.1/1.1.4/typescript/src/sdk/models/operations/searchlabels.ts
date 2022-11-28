import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchLabelsSortEnum {
    Created = "created",
    Updated = "updated"
}


export class SearchLabelsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: shared.OrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=repository_id" })
  repositoryId: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: SearchLabelsSortEnum;
}


export class SearchLabels200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=incomplete_results" })
  incompleteResults: boolean;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: shared.LabelSearchResultItem })
  items: shared.LabelSearchResultItem[];

  @SpeakeasyMetadata({ data: "json, name=total_count" })
  totalCount: number;
}


export class SearchLabelsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchLabelsQueryParams;
}


export class SearchLabelsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata()
  searchLabels200ApplicationJsonObject?: SearchLabels200ApplicationJson;

  @SpeakeasyMetadata()
  validationError?: shared.ValidationError;
}
