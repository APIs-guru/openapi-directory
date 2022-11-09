import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AccessResponseEaadharEnum {
    Y = "Y"
,    N = "N"
}

export enum AccessResponseGenderEnum {
    M = "M"
,    F = "F"
,    T = "T"
}


export class AccessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=access_token" })
  accessToken: string;

  @Metadata({ data: "json, name=digilocker_id" })
  digilockerId: string;

  @Metadata({ data: "json, name=dob" })
  dob: number;

  @Metadata({ data: "json, name=eaadhar" })
  eaadhar: AccessResponseEaadharEnum;

  @Metadata({ data: "json, name=expires_in" })
  expiresIn: number;

  @Metadata({ data: "json, name=gender" })
  gender: AccessResponseGenderEnum;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=reference_key" })
  referenceKey: string;

  @Metadata({ data: "json, name=refresh_token" })
  refreshToken: string;

  @Metadata({ data: "json, name=scope" })
  scope: string;

  @Metadata({ data: "json, name=token_type" })
  tokenType: string;
}
