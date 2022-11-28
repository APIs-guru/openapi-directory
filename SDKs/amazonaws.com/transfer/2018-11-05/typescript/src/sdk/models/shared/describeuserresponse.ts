import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DescribedUser } from "./describeduser";



export class DescribeUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ServerId" })
  serverId: string;

  @SpeakeasyMetadata({ data: "json, name=User" })
  user: DescribedUser;
}
