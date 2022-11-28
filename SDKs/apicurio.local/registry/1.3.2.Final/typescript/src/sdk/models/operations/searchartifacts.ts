import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum SearchArtifactsOrderEnum {
    Asc = "asc",
    Desc = "desc"
}

export enum SearchArtifactsOverEnum {
    Everything = "everything",
    Name = "name",
    Description = "description",
    Labels = "labels"
}


export class SearchArtifactsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=order" })
  order?: SearchArtifactsOrderEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=over" })
  over?: SearchArtifactsOverEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=search" })
  search?: string;
}


export class SearchArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: SearchArtifactsQueryParams;
}


export class SearchArtifactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  artifactSearchResults?: shared.ArtifactSearchResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  statusCode: number;
}
