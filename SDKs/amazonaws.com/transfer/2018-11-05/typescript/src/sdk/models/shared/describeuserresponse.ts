import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DescribedUser } from "./describeduser";


export class DescribeUserResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ServerId" })
  serverId: string;

  @Metadata({ data: "json, name=User" })
  user: DescribedUser;
}
