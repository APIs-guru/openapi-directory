import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum {
    Droplet = "droplet"
,    K8s = "k8s"
,    IpAddr = "ip_addr"
,    Tag = "tag"
,    App = "app"
}


export class Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster_uuid" })
  clusterUuid?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=type" })
  type: Onev21databases1Percent7BdatabaseClusterUuidPercent7D1firewallGetResponses200ContentApplication1jsonSchemaPropertiesRulesItemsTypeEnum;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}
