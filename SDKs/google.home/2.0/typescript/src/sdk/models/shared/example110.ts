import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ConnectedDevice } from "./connecteddevice";
import { RemoteSink } from "./remotesink";


export class Example110 extends SpeakeasyBase {
  @Metadata({ data: "json, name=audio_mode" })
  audioMode: number;

  @Metadata({ data: "json, name=connected_devices", elemType: shared.ConnectedDevice })
  connectedDevices: ConnectedDevice[];

  @Metadata({ data: "json, name=connecting_devices" })
  connectingDevices: string[];

  @Metadata({ data: "json, name=discovery_enabled" })
  discoveryEnabled: boolean;

  @Metadata({ data: "json, name=remote_sink" })
  remoteSink: RemoteSink;

  @Metadata({ data: "json, name=scanning_enabled" })
  scanningEnabled: boolean;
}
