import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Handshake } from "./handshake";


export class ListHandshakesForOrganizationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Handshakes", elemType: shared.Handshake })
  handshakes?: Handshake[];

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
