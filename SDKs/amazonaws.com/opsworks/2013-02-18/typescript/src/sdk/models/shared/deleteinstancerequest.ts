import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteInstanceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DeleteElasticIp" })
  deleteElasticIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=DeleteVolumes" })
  deleteVolumes?: boolean;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
