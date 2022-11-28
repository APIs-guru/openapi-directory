import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InstanceIdentity } from "./instanceidentity";



export class RegisterInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Hostname" })
  hostname?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceIdentity" })
  instanceIdentity?: InstanceIdentity;

  @SpeakeasyMetadata({ data: "json, name=PrivateIp" })
  privateIp?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=RsaPublicKey" })
  rsaPublicKey?: string;

  @SpeakeasyMetadata({ data: "json, name=RsaPublicKeyFingerprint" })
  rsaPublicKeyFingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
