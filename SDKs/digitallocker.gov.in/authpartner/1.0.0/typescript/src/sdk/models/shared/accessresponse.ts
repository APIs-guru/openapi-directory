import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccessResponseEaadharEnum {
    Y = "Y",
    N = "N"
}

export enum AccessResponseGenderEnum {
    M = "M",
    F = "F",
    T = "T"
}


export class AccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken: string;

  @SpeakeasyMetadata({ data: "json, name=digilocker_id" })
  digilockerId: string;

  @SpeakeasyMetadata({ data: "json, name=dob" })
  dob: number;

  @SpeakeasyMetadata({ data: "json, name=eaadhar" })
  eaadhar: AccessResponseEaadharEnum;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn: number;

  @SpeakeasyMetadata({ data: "json, name=gender" })
  gender: AccessResponseGenderEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=reference_key" })
  referenceKey: string;

  @SpeakeasyMetadata({ data: "json, name=refresh_token" })
  refreshToken: string;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType: string;
}
