import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryGetApiVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryGetApiVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryGetApiVersionPathParams;
}


export class RegistryGetApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  apiVersion?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
