import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StaticIp } from "./staticip";



export class GetStaticIpsResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=staticIps", elemType: StaticIp })
  staticIps?: StaticIp[];
}
