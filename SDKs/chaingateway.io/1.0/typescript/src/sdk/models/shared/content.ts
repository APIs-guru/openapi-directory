import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Crypto } from "./crypto";



export class Content extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address: string;

  @SpeakeasyMetadata({ data: "json, name=crypto" })
  crypto: Crypto;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version: number;
}
