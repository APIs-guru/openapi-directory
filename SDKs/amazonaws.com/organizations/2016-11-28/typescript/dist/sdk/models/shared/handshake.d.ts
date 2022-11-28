import { SpeakeasyBase } from "../../../internal/utils";
import { ActionTypeEnum } from "./actiontypeenum";
import { HandshakeParty } from "./handshakeparty";
import { HandshakeResource } from "./handshakeresource";
import { HandshakeStateEnum } from "./handshakestateenum";
/**
 * <p>Contains information that must be exchanged to securely establish a relationship between two accounts (an <i>originator</i> and a <i>recipient</i>). For example, when a management account (the originator) invites another account (the recipient) to join its organization, the two accounts exchange information as a series of handshake requests and responses.</p> <p> <b>Note:</b> Handshakes that are <code>CANCELED</code>, <code>ACCEPTED</code>, or <code>DECLINED</code> show up in lists for only 30 days after entering that state After that they are deleted.</p>
**/
export declare class Handshake extends SpeakeasyBase {
    action?: ActionTypeEnum;
    arn?: string;
    expirationTimestamp?: Date;
    id?: string;
    parties?: HandshakeParty[];
    requestedTimestamp?: Date;
    resources?: HandshakeResource[];
    state?: HandshakeStateEnum;
}
