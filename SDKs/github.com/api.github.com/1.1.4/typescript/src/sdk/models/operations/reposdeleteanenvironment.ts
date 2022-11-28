import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReposDeleteAnEnvironmentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteAnEnvironmentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReposDeleteAnEnvironmentPathParams;
}


export class ReposDeleteAnEnvironmentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
