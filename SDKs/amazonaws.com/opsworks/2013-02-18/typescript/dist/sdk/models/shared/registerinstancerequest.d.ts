import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceIdentity } from "./instanceidentity";
export declare class RegisterInstanceRequest extends SpeakeasyBase {
    hostname?: string;
    instanceIdentity?: InstanceIdentity;
    privateIp?: string;
    publicIp?: string;
    rsaPublicKey?: string;
    rsaPublicKeyFingerprint?: string;
    stackId: string;
}
