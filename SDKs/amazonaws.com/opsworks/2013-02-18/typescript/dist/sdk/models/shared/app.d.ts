import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
import { DataSource } from "./datasource";
import { EnvironmentVariable } from "./environmentvariable";
import { SslConfiguration } from "./sslconfiguration";
import { AppTypeEnum } from "./apptypeenum";
/**
 * A description of the app.
**/
export declare class App extends SpeakeasyBase {
    appId?: string;
    appSource?: Source;
    attributes?: Map<string, string>;
    createdAt?: string;
    dataSources?: DataSource[];
    description?: string;
    domains?: string[];
    enableSsl?: boolean;
    environment?: EnvironmentVariable[];
    name?: string;
    shortname?: string;
    sslConfiguration?: SslConfiguration;
    stackId?: string;
    type?: AppTypeEnum;
}
