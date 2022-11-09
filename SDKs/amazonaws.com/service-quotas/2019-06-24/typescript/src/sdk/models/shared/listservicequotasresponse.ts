import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceQuota } from "./servicequota";


export class ListServiceQuotasResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=Quotas", elemType: shared.ServiceQuota })
  quotas?: ServiceQuota[];
}
