import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DnsRuleDescriptor } from "./dnsruledescriptor";
import { AppExternalCpd } from "./appexternalcpd";
import { FeatureDependency } from "./featuredependency";
import { LatencyDescriptor } from "./latencydescriptor";
import { ServiceDependency } from "./servicedependency";
import { ServiceDescriptor } from "./servicedescriptor";
import { TrafficRuleDescriptor } from "./trafficruledescriptor";
import { TransportDependency } from "./transportdependency";



export class AppD extends SpeakeasyBase {
  @SpeakeasyMetadata()
  appDId: string;

  @SpeakeasyMetadata({ elemType: DnsRuleDescriptor })
  appDnsRule?: DnsRuleDescriptor[];

  @SpeakeasyMetadata()
  appDVersion: string;

  @SpeakeasyMetadata()
  appDescription: string;

  @SpeakeasyMetadata({ elemType: AppExternalCpd })
  appExtCpd?: AppExternalCpd[];

  @SpeakeasyMetadata({ elemType: FeatureDependency })
  appFeatureOptional?: FeatureDependency[];

  @SpeakeasyMetadata({ elemType: FeatureDependency })
  appFeatureRequired?: FeatureDependency[];

  @SpeakeasyMetadata()
  appInfoName?: string;

  @SpeakeasyMetadata()
  appLatency?: LatencyDescriptor;

  @SpeakeasyMetadata()
  appName: string;

  @SpeakeasyMetadata()
  appProvider: string;

  @SpeakeasyMetadata({ elemType: ServiceDependency })
  appServiceOptional?: ServiceDependency[];

  @SpeakeasyMetadata({ elemType: ServiceDescriptor })
  appServiceProduced?: ServiceDescriptor[];

  @SpeakeasyMetadata({ elemType: ServiceDependency })
  appServiceRequired?: ServiceDependency[];

  @SpeakeasyMetadata()
  appSoftVersion: string;

  @SpeakeasyMetadata({ elemType: TrafficRuleDescriptor })
  appTrafficRule?: TrafficRuleDescriptor[];

  @SpeakeasyMetadata()
  changeAppInstanceStateOpConfig?: string;

  @SpeakeasyMetadata()
  mecVersion: string[];

  @SpeakeasyMetadata()
  swImageDescriptor: string;

  @SpeakeasyMetadata()
  terminateAppInstanceOpConfig?: string;

  @SpeakeasyMetadata({ elemType: TransportDependency })
  transportDependencies?: TransportDependency[];

  @SpeakeasyMetadata()
  virtualComputeDescriptor: string;

  @SpeakeasyMetadata()
  virtualStorageDescriptor?: string[];
}
