import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegistryGetProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;
}


export class RegistryGetProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RegistryGetProjectPathParams;
}


export class RegistryGetProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  project?: any;

  @Metadata()
  statusCode: number;
}
