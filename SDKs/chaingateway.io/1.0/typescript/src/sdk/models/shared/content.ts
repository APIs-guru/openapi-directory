import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Crypto } from "./crypto";


export class Content extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address: string;

  @Metadata({ data: "json, name=crypto" })
  crypto: Crypto;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=version" })
  version: number;
}
