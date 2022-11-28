import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Handshake } from "./handshake";



export class ListHandshakesForOrganizationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Handshakes", elemType: Handshake })
  handshakes?: Handshake[];

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
