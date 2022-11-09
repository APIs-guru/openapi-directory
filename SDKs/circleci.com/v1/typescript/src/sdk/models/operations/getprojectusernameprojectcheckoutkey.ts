import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectUsernameProjectCheckoutKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectCheckoutKeyRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectUsernameProjectCheckoutKeyPathParams;
}


export class GetProjectUsernameProjectCheckoutKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Key })
  keys?: shared.Key[];

  @Metadata()
  statusCode: number;
}
