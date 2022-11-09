import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack extends SpeakeasyBase {
  @Metadata({ data: "json, name=channel" })
  channel: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlerts extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string[];

  @Metadata({ data: "json, name=slack", elemType: shared.Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack })
  slack: Onev21monitoring1alertsGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesPoliciesItemsPropertiesAlertsSlack[];
}
