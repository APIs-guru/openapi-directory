import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=fingerprint" })
  fingerprint: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project" })
  project: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=username" })
  username: string;
}

export enum DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum {
    Ok = "OK"
}


export class DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonMessageEnum;
}


export class DeleteProjectUsernameProjectCheckoutKeyFingerprintRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProjectUsernameProjectCheckoutKeyFingerprintPathParams;
}


export class DeleteProjectUsernameProjectCheckoutKeyFingerprintResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJsonObject?: DeleteProjectUsernameProjectCheckoutKeyFingerprint200ApplicationJson;

  @SpeakeasyMetadata()
  statusCode: number;
}
