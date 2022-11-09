import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryUpdateApiSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryUpdateApiSpecQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=allow_missing" })
  allowMissing?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=update_mask" })
  updateMask?: string;
}


export class RegistryUpdateApiSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryUpdateApiSpecPathParams;

  @Metadata()
  queryParams: RegistryUpdateApiSpecQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryUpdateApiSpecResponse extends SpeakeasyBase {
  @Metadata()
  apiSpec?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
