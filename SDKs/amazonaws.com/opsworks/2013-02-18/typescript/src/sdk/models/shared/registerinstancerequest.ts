import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { InstanceIdentity } from "./instanceidentity";


export class RegisterInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Hostname" })
  hostname?: string;

  @Metadata({ data: "json, name=InstanceIdentity" })
  instanceIdentity?: InstanceIdentity;

  @Metadata({ data: "json, name=PrivateIp" })
  privateIp?: string;

  @Metadata({ data: "json, name=PublicIp" })
  publicIp?: string;

  @Metadata({ data: "json, name=RsaPublicKey" })
  rsaPublicKey?: string;

  @Metadata({ data: "json, name=RsaPublicKeyFingerprint" })
  rsaPublicKeyFingerprint?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
