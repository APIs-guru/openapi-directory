import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribedAccess } from "./describedaccess";



export class DescribeAccessResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Access" })
  access: DescribedAccess;

  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;
}
