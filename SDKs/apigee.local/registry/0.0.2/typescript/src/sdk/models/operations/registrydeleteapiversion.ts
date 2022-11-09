import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryDeleteApiVersionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryDeleteApiVersionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryDeleteApiVersionPathParams;
}


export class RegistryDeleteApiVersionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
