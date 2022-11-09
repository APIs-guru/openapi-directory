import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ActionTypeEnum } from "./actiontypeenum";
import { HandshakeParty } from "./handshakeparty";
import { HandshakeResource } from "./handshakeresource";
import { HandshakeStateEnum } from "./handshakestateenum";


// Handshake
/** 
 * <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a management account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are <code>CANCELED</code>, <code>ACCEPTED</code>, or <code>DECLINED</code> show up in lists for only 30 days after entering that state After that they are deleted.</p>
**/
export class Handshake extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: ActionTypeEnum;

  @Metadata({ data: "json, name=Arn" })
  arn?: string;

  @Metadata({ data: "json, name=ExpirationTimestamp" })
  expirationTimestamp?: Date;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Parties", elemType: shared.HandshakeParty })
  parties?: HandshakeParty[];

  @Metadata({ data: "json, name=RequestedTimestamp" })
  requestedTimestamp?: Date;

  @Metadata({ data: "json, name=Resources", elemType: shared.HandshakeResource })
  resources?: HandshakeResource[];

  @Metadata({ data: "json, name=State" })
  state?: HandshakeStateEnum;
}
