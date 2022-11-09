import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { StaticIp } from "./staticip";


export class GetStaticIpsResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=staticIps", elemType: shared.StaticIp })
  staticIps?: StaticIp[];
}
