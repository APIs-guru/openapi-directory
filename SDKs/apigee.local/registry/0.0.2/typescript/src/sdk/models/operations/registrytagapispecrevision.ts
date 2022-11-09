import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryTagApiSpecRevisionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryTagApiSpecRevisionRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryTagApiSpecRevisionPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryTagApiSpecRevisionResponse extends SpeakeasyBase {
  @Metadata()
  apiSpec?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
