import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribedAccess } from "./describedaccess";


export class DescribeAccessResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Access" })
  access: DescribedAccess;

  @Metadata({ data: "json, name=ServerId" })
  serverId: string;
}
