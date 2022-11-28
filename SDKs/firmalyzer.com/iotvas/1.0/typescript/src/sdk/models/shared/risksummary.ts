import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RiskSummary extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_tools_risk" })
  clientToolsRisk?: string;

  @SpeakeasyMetadata({ data: "json, name=crypto_risk" })
  cryptoRisk?: string;

  @SpeakeasyMetadata({ data: "json, name=kernel_risk" })
  kernelRisk?: string;

  @SpeakeasyMetadata({ data: "json, name=net_services_risk" })
  netServicesRisk?: string;
}
