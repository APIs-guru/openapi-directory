import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ActionsGetEnvironmentPublicKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class ActionsGetEnvironmentPublicKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ActionsGetEnvironmentPublicKeyPathParams;
}


export class ActionsGetEnvironmentPublicKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  actionsPublicKey?: shared.ActionsPublicKey;
}
