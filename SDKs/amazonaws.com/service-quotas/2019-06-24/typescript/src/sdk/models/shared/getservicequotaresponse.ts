import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceQuota } from "./servicequota";



export class GetServiceQuotaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Quota" })
  quota?: ServiceQuota;
}
