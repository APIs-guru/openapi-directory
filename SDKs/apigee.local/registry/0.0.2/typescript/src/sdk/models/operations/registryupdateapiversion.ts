import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryUpdateApiVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryUpdateApiVersionQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=update_mask" })
  updateMask?: string;
}


export class RegistryUpdateApiVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryUpdateApiVersionPathParams;

  @Metadata()
  queryParams: RegistryUpdateApiVersionQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryUpdateApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  apiVersion?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
