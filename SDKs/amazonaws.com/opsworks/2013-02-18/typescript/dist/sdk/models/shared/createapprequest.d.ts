import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { DataSource } from "./datasource";
import { EnvironmentVariable } from "./environmentvariable";
import { SslConfiguration } from "./sslconfiguration";
import { AppTypeEnum } from "./apptypeenum";
export declare class CreateAppRequest extends SpeakeasyBase {
    appSource?: Source;
    attributes?: Map<string, string>;
    dataSources?: DataSource[];
    description?: string;
    domains?: string[];
    enableSsl?: boolean;
    environment?: EnvironmentVariable[];
    name: string;
    shortname?: string;
    sslConfiguration?: SslConfiguration;
    stackId: string;
    type: AppTypeEnum;
}
