import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeleteInstanceRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=DeleteElasticIp" })
  deleteElasticIp?: boolean;

  @Metadata({ data: "json, name=DeleteVolumes" })
  deleteVolumes?: boolean;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId: string;
}
