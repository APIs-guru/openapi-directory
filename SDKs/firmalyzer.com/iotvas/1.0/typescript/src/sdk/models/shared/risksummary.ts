import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RiskSummary extends SpeakeasyBase {
  @Metadata({ data: "json, name=client_tools_risk" })
  clientToolsRisk?: string;

  @Metadata({ data: "json, name=crypto_risk" })
  cryptoRisk?: string;

  @Metadata({ data: "json, name=kernel_risk" })
  kernelRisk?: string;

  @Metadata({ data: "json, name=net_services_risk" })
  netServicesRisk?: string;
}
