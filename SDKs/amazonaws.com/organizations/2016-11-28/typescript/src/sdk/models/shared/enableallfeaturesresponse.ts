import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";



export class EnableAllFeaturesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Handshake" })
  handshake?: Handshake;
}
