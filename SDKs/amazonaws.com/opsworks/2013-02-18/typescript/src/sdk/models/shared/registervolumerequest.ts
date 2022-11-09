import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterVolumeRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=Ec2VolumeId" })
  ec2VolumeId?: string;

  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}
