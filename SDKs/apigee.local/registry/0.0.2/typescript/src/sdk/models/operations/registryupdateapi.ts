import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryUpdateApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryUpdateApiQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=update_mask" })
  updateMask?: string;
}


export class RegistryUpdateApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryUpdateApiPathParams;

  @Metadata()
  queryParams: RegistryUpdateApiQueryParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryUpdateApiResponse extends SpeakeasyBase {
  @Metadata()
  api?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
