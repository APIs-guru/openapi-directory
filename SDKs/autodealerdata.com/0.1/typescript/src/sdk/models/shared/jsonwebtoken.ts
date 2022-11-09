import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class JsonWebToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdOn" })
  createdOn?: number;

  @Metadata({ data: "json, name=expires" })
  expires?: number;

  @Metadata({ data: "json, name=token" })
  token: string;
}
