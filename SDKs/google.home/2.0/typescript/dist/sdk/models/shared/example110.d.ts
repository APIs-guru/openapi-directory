import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ConnectedDevice } from "./connecteddevice";
import { RemoteSink } from "./remotesink";
export declare class Example110 extends SpeakeasyBase {
    audioMode: number;
    connectedDevices: ConnectedDevice[];
    connectingDevices: string[];
    discoveryEnabled: boolean;
    remoteSink: RemoteSink;
    scanningEnabled: boolean;
}
