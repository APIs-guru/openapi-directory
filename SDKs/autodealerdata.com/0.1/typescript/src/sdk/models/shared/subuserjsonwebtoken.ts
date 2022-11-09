import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubUserJsonWebToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=createdOn" })
  createdOn?: number;

  @Metadata({ data: "json, name=domain" })
  domain: string;

  @Metadata({ data: "json, name=endPoints" })
  endPoints?: string[];

  @Metadata({ data: "json, name=expires" })
  expires?: number;

  @Metadata({ data: "json, name=token" })
  token: string;

  @Metadata({ data: "json, name=uuid" })
  uuid: string;
}
