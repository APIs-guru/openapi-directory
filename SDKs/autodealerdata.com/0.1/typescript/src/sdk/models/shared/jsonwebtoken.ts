import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class JsonWebToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=createdOn" })
  createdOn?: number;

  @SpeakeasyMetadata({ data: "json, name=expires" })
  expires?: number;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token: string;
}
