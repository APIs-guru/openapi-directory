import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ActionsGetEnvironmentPublicKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=environment_name" })
  environmentName: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=repository_id" })
  repositoryId: number;
}


export class ActionsGetEnvironmentPublicKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ActionsGetEnvironmentPublicKeyPathParams;
}


export class ActionsGetEnvironmentPublicKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  actionsPublicKey?: shared.ActionsPublicKey;
}
