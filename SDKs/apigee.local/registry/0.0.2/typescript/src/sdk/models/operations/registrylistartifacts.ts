import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryListArtifactsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryListArtifactsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=filter" })
  filter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_token" })
  pageToken?: string;
}


export class RegistryListArtifactsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryListArtifactsPathParams;

  @Metadata()
  queryParams: RegistryListArtifactsQueryParams;
}


export class RegistryListArtifactsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listArtifactsResponse?: any;

  @Metadata()
  statusCode: number;
}
