import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ServiceSummary } from "./servicesummary";


export class ListServicesOutput extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @Metadata({ data: "json, name=services", elemType: shared.ServiceSummary })
  services: ServiceSummary[];
}
