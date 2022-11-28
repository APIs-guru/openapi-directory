import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterVolumeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Ec2VolumeId" })
  ec2VolumeId?: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}
