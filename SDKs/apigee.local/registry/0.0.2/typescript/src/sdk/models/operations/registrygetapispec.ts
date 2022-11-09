import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryGetApiSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryGetApiSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryGetApiSpecPathParams;
}


export class RegistryGetApiSpecResponse extends SpeakeasyBase {
  @Metadata()
  apiSpec?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
