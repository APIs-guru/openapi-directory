import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConnectedDevice } from "./connecteddevice";
import { RemoteSink } from "./remotesink";



export class Example110 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_mode" })
  audioMode: number;

  @SpeakeasyMetadata({ data: "json, name=connected_devices", elemType: ConnectedDevice })
  connectedDevices: ConnectedDevice[];

  @SpeakeasyMetadata({ data: "json, name=connecting_devices" })
  connectingDevices: string[];

  @SpeakeasyMetadata({ data: "json, name=discovery_enabled" })
  discoveryEnabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=remote_sink" })
  remoteSink: RemoteSink;

  @SpeakeasyMetadata({ data: "json, name=scanning_enabled" })
  scanningEnabled: boolean;
}
