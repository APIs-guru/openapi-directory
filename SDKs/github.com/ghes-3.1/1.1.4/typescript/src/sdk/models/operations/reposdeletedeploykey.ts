import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ReposDeleteDeployKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=key_id" })
  keyId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=owner" })
  owner: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repo" })
  repo: string;
}


export class ReposDeleteDeployKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ReposDeleteDeployKeyPathParams;
}


export class ReposDeleteDeployKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
