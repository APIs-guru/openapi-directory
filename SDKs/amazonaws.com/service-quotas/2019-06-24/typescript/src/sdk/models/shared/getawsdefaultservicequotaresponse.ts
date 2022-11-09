import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ServiceQuota } from "./servicequota";


export class GetAwsDefaultServiceQuotaResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Quota" })
  quota?: ServiceQuota;
}
