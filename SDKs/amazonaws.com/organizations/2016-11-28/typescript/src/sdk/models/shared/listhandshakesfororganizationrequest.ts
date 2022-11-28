import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HandshakeFilter } from "./handshakefilter";



export class ListHandshakesForOrganizationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Filter" })
  filter?: HandshakeFilter;

  @SpeakeasyMetadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
