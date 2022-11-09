import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ReachabilityStatusEnum } from "./reachabilitystatusenum";


export class GetContactReachabilityStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=domainName" })
  domainName?: string;

  @Metadata({ data: "json, name=status" })
  status?: ReachabilityStatusEnum;
}
