import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryGetApiSpecContentsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryGetApiSpecContentsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryGetApiSpecContentsPathParams;
}


export class RegistryGetApiSpecContentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
