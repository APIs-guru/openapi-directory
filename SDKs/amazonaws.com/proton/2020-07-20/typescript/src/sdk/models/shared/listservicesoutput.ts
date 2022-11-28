import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceSummary } from "./servicesummary";



export class ListServicesOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=services", elemType: ServiceSummary })
  services: ServiceSummary[];
}
