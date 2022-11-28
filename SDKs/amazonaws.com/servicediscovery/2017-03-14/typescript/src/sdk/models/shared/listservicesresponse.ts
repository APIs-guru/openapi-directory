import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ServiceSummary } from "./servicesummary";



export class ListServicesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NextToken" })
  nextToken?: string;

  @SpeakeasyMetadata({ data: "json, name=Services", elemType: ServiceSummary })
  services?: ServiceSummary[];
}
