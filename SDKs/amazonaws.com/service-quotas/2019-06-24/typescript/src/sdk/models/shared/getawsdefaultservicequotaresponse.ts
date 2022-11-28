import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceQuota } from "./servicequota";



export class GetAwsDefaultServiceQuotaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Quota" })
  quota?: ServiceQuota;
}
