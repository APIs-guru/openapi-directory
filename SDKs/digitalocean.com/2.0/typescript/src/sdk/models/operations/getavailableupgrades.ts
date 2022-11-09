import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAvailableUpgradesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=cluster_id" })
  clusterId: string;
}


export class GetAvailableUpgradesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAvailableUpgradesPathParams;
}


export class GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions extends SpeakeasyBase {
  @Metadata({ data: "json, name=kubernetes_version" })
  kubernetesVersion?: string;

  @Metadata({ data: "json, name=slug" })
  slug?: string;
}


export class GetAvailableUpgrades200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=available_upgrade_versions", elemType: operations.GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions })
  availableUpgradeVersions?: GetAvailableUpgrades200ApplicationJsonAvailableUpgradeVersions[];
}


export class GetAvailableUpgrades401ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=request_id" })
  requestId?: string;
}


export class GetAvailableUpgradesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAvailableUpgrades200ApplicationJsonObject?: GetAvailableUpgrades200ApplicationJson;

  @Metadata()
  getAvailableUpgrades401ApplicationJsonObject?: GetAvailableUpgrades401ApplicationJson;

  @Metadata()
  onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
