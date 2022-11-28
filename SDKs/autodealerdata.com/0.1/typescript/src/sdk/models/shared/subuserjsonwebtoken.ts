import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubUserJsonWebToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: number;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain: string;

  @SpeakeasyMetadata({ data: "json, name=endPoints" })
  endPoints?: string[];

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: number;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid: string;
}
