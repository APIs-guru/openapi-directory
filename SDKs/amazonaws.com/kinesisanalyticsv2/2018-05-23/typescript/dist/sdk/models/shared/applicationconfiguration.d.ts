import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationCodeConfiguration } from "./applicationcodeconfiguration";
import { ApplicationSnapshotConfiguration } from "./applicationsnapshotconfiguration";
import { EnvironmentProperties } from "./environmentproperties";
import { FlinkApplicationConfiguration } from "./flinkapplicationconfiguration";
import { SqlApplicationConfiguration } from "./sqlapplicationconfiguration";
import { VpcConfiguration } from "./vpcconfiguration";
import { ZeppelinApplicationConfiguration } from "./zeppelinapplicationconfiguration";
/**
 * Specifies the creation parameters for a Kinesis Data Analytics application.
**/
export declare class ApplicationConfiguration extends SpeakeasyBase {
    applicationCodeConfiguration?: ApplicationCodeConfiguration;
    applicationSnapshotConfiguration?: ApplicationSnapshotConfiguration;
    environmentProperties?: EnvironmentProperties;
    flinkApplicationConfiguration?: FlinkApplicationConfiguration;
    sqlApplicationConfiguration?: SqlApplicationConfiguration;
    vpcConfigurations?: VpcConfiguration[];
    zeppelinApplicationConfiguration?: ZeppelinApplicationConfiguration;
}
