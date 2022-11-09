import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum SearchArtifactsOrderEnum {
    Asc = "asc"
,    Desc = "desc"
}

export enum SearchArtifactsOverEnum {
    Everything = "everything"
,    Name = "name"
,    Description = "description"
,    Labels = "labels"
}


export class SearchArtifactsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: SearchArtifactsOrderEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=over" })
  over?: SearchArtifactsOverEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class SearchArtifactsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: SearchArtifactsQueryParams;
}


export class SearchArtifactsResponse extends SpeakeasyBase {
  @Metadata()
  artifactSearchResults?: shared.ArtifactSearchResults;

  @Metadata()
  contentType: string;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  statusCode: number;
}
