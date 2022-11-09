import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryDeleteApiPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=api" })
  api: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryDeleteApiRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryDeleteApiPathParams;
}


export class RegistryDeleteApiResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
