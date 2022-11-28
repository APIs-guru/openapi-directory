import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetContainersJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=all" })
  all?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" })
  filters?: string;
}


export class GetContainersJsonHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Project-Id" })
  xAuthProjectId: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Auth-Token" })
  xAuthToken: string;
}


export class GetContainersJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetContainersJsonQueryParams;

  @SpeakeasyMetadata()
  headers: GetContainersJsonHeaders;
}


export class GetContainersJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  containers?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
