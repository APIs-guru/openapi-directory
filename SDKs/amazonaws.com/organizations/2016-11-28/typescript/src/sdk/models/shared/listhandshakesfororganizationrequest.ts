import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HandshakeFilter } from "./handshakefilter";


export class ListHandshakesForOrganizationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Filter" })
  filter?: HandshakeFilter;

  @Metadata({ data: "json, name=MaxResults" })
  maxResults?: number;

  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;
}
