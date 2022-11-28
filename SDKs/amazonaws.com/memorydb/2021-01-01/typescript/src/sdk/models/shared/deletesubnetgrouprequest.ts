import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteSubnetGroupRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=SubnetGroupName" })
  subnetGroupName: string;
}
