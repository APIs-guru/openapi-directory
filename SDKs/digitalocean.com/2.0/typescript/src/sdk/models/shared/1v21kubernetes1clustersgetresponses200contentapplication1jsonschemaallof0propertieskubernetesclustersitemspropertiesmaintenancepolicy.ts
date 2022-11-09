import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyDayEnum {
    Any = "any"
,    Monday = "monday"
,    Tuesday = "tuesday"
,    Wednesday = "wednesday"
,    Thursday = "thursday"
,    Friday = "friday"
,    Saturday = "saturday"
,    Sunday = "sunday"
}


// Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicy
/** 
 * An object specifying the maintenance window policy for the Kubernetes cluster.
**/
export class Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicy extends SpeakeasyBase {
  @Metadata({ data: "json, name=day" })
  day?: Onev21kubernetes1clustersGetResponses200ContentApplication1jsonSchemaAllOf0PropertiesKubernetesClustersItemsPropertiesMaintenancePolicyDayEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;
}
