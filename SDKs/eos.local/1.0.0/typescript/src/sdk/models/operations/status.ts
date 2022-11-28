import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StatusRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpoint" })
  endpoint: string;
}


// Status200ApplicationJsonLastHandshake
/** 
 * Structure holding detailed information about the connection
**/
export class Status200ApplicationJsonLastHandshake extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=agent" })
  agent?: string;

  @SpeakeasyMetadata({ data: "json, name=chain_id" })
  chainId?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: number;

  @SpeakeasyMetadata({ data: "json, name=head_id" })
  headId?: string;

  @SpeakeasyMetadata({ data: "json, name=head_num" })
  headNum?: number;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=last_irreversible_block_id" })
  lastIrreversibleBlockId?: string;

  @SpeakeasyMetadata({ data: "json, name=last_irreversible_block_num" })
  lastIrreversibleBlockNum?: number;

  @SpeakeasyMetadata({ data: "json, name=network_version" })
  networkVersion?: number;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=os" })
  os?: string;

  @SpeakeasyMetadata({ data: "json, name=p2p_address" })
  p2pAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=sig" })
  sig?: string;

  @SpeakeasyMetadata({ data: "json, name=time" })
  time?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}


export class Status200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connecting" })
  connecting?: boolean;

  @SpeakeasyMetadata({ data: "json, name=last_handshake" })
  lastHandshake?: Status200ApplicationJsonLastHandshake;

  @SpeakeasyMetadata({ data: "json, name=peer" })
  peer?: string;

  @SpeakeasyMetadata({ data: "json, name=syncing" })
  syncing?: boolean;
}


export class StatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: StatusRequestBody;
}


export class StatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  status200ApplicationJsonObject?: Status200ApplicationJson;
}
