import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceQuota } from "./servicequota";



export class ListAwsDefaultServiceQuotasResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Quotas", elemType: ServiceQuota })
  quotas?: ServiceQuota[];
}
