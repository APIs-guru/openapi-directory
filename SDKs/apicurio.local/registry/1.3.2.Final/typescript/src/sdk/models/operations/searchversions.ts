import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SearchVersionsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=artifactId" })
  artifactId: string;
}


export class SearchVersionsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;
}


export class SearchVersionsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SearchVersionsPathParams;

  @Metadata()
  queryParams: SearchVersionsQueryParams;
}


export class SearchVersionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;

  @Metadata()
  versionSearchResults?: shared.VersionSearchResults;
}
