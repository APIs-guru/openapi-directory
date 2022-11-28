import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeNodeAssociationStatusRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NodeAssociationStatusToken" })
  nodeAssociationStatusToken: string;

  @SpeakeasyMetadata({ data: "json, name=ServerName" })
  serverName: string;
}
