import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetProjectUsernameProjectCheckoutKeyFingerprintPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class GetProjectUsernameProjectCheckoutKeyFingerprintRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetProjectUsernameProjectCheckoutKeyFingerprintPathParams;
}


export class GetProjectUsernameProjectCheckoutKeyFingerprintResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  key?: shared.Key;

  @Metadata()
  statusCode: number;
}
