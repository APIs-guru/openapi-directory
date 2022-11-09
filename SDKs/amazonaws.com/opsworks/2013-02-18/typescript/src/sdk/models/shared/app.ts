import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Source } from "./source";
import { DataSource } from "./datasource";
import { EnvironmentVariable } from "./environmentvariable";
import { SslConfiguration } from "./sslconfiguration";
import { AppTypeEnum } from "./apptypeenum";


// App
/** 
 * A description of the app.
**/
export class App extends SpeakeasyBase {
  @Metadata({ data: "json, name=AppId" })
  appId?: string;

  @Metadata({ data: "json, name=AppSource" })
  appSource?: Source;

  @Metadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @Metadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=DataSources", elemType: shared.DataSource })
  dataSources?: DataSource[];

  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Domains" })
  domains?: string[];

  @Metadata({ data: "json, name=EnableSsl" })
  enableSsl?: boolean;

  @Metadata({ data: "json, name=Environment", elemType: shared.EnvironmentVariable })
  environment?: EnvironmentVariable[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Shortname" })
  shortname?: string;

  @Metadata({ data: "json, name=SslConfiguration" })
  sslConfiguration?: SslConfiguration;

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;

  @Metadata({ data: "json, name=Type" })
  type?: AppTypeEnum;
}
