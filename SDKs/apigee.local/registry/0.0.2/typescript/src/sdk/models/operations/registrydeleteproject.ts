import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryDeleteProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryDeleteProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryDeleteProjectPathParams;
}


export class RegistryDeleteProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
