import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeNodeAssociationStatusRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=NodeAssociationStatusToken" })
  nodeAssociationStatusToken: string;

  @Metadata({ data: "json, name=ServerName" })
  serverName: string;
}
