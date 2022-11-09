import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ConnectionsRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: Map<string, any>;
}


// Connections200ApplicationJsonLastHandshake
/** 
 * Structure holding detailed information about the connection
**/
export class Connections200ApplicationJsonLastHandshake extends SpeakeasyBase {
  @Metadata({ data: "json, name=agent" })
  agent?: string;

  @Metadata({ data: "json, name=chain_id" })
  chainId?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: number;

  @Metadata({ data: "json, name=head_id" })
  headId?: string;

  @Metadata({ data: "json, name=head_num" })
  headNum?: number;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=last_irreversible_block_id" })
  lastIrreversibleBlockId?: string;

  @Metadata({ data: "json, name=last_irreversible_block_num" })
  lastIrreversibleBlockNum?: number;

  @Metadata({ data: "json, name=network_version" })
  networkVersion?: number;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=os" })
  os?: string;

  @Metadata({ data: "json, name=p2p_address" })
  p2pAddress?: string;

  @Metadata({ data: "json, name=sig" })
  sig?: string;

  @Metadata({ data: "json, name=time" })
  time?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}


export class Connections200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=connecting" })
  connecting?: boolean;

  @Metadata({ data: "json, name=last_handshake" })
  lastHandshake?: Connections200ApplicationJsonLastHandshake;

  @Metadata({ data: "json, name=peer" })
  peer?: string;

  @Metadata({ data: "json, name=syncing" })
  syncing?: boolean;
}


export class ConnectionsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: operations.Connections200ApplicationJson })
  connections200ApplicationJsonObjects?: Connections200ApplicationJson[];
}
