import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class IssuesListAssigneesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class IssuesListAssigneesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class IssuesListAssigneesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: IssuesListAssigneesPathParams;

  @SpeakeasyMetadata()
  queryParams: IssuesListAssigneesQueryParams;
}


export class IssuesListAssigneesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  basicError?: shared.BasicError;

  @SpeakeasyMetadata({ elemType: shared.SimpleUser })
  simpleUsers?: shared.SimpleUser[];
}
