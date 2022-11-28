import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegistryListArtifactsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryListArtifactsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListArtifactsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RegistryListArtifactsPathParams;

  @SpeakeasyMetadata()
  queryParams: RegistryListArtifactsQueryParams;
}


export class RegistryListArtifactsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listArtifactsResponse?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
