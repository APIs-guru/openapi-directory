import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReachabilityStatusEnum } from "./reachabilitystatusenum";



export class GetContactReachabilityStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=domainName" })
  domainName?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ReachabilityStatusEnum;
}
