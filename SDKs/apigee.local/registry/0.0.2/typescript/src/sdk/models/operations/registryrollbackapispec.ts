import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryRollbackApiSpecPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=spec" })
  spec: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=version" })
  version: string;
}


export class RegistryRollbackApiSpecRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryRollbackApiSpecPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class RegistryRollbackApiSpecResponse extends SpeakeasyBase {
  @Metadata()
  apiSpec?: any;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
