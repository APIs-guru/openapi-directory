import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { DataSource } from "./datasource";
import { EnvironmentVariable } from "./environmentvariable";
import { SslConfiguration } from "./sslconfiguration";
import { AppTypeEnum } from "./apptypeenum";
export declare class UpdateAppRequest extends SpeakeasyBase {
    appId: string;
    appSource?: Source;
    attributes?: Map<string, string>;
    dataSources?: DataSource[];
    description?: string;
    domains?: string[];
    enableSsl?: boolean;
    environment?: EnvironmentVariable[];
    name?: string;
    sslConfiguration?: SslConfiguration;
    type?: AppTypeEnum;
}
