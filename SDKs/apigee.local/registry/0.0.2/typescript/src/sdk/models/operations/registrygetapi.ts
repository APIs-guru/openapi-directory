import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryGetApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryGetApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryGetApiPathParams;
}


export class RegistryGetApiResponse extends SpeakeasyBase {
  @Metadata()
  api?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
