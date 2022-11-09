import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}


export class DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams;
}

export enum DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum {
    Ok = "OK"
}


export class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum;
}


export class DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonObject?: DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson;

  @Metadata()
  statusCode: number;
}
