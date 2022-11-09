import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceQuota } from "./servicequota";


export class GetServiceQuotaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Quota" })
  quota?: ServiceQuota;
}
