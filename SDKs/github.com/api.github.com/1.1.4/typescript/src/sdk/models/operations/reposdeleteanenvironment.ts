import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposDeleteAnEnvironmentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteAnEnvironmentRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeleteAnEnvironmentPathParams;
}


export class ReposDeleteAnEnvironmentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
