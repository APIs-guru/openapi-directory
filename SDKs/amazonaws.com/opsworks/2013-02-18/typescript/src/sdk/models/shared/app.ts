import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=AppId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=AppSource" })
  appSource?: Source;

  @SpeakeasyMetadata({ data: "json, name=Attributes" })
  attributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=CreatedAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=DataSources", elemType: DataSource })
  dataSources?: DataSource[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Domains" })
  domains?: string[];

  @SpeakeasyMetadata({ data: "json, name=EnableSsl" })
  enableSsl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Environment", elemType: EnvironmentVariable })
  environment?: EnvironmentVariable[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Shortname" })
  shortname?: string;

  @SpeakeasyMetadata({ data: "json, name=SslConfiguration" })
  sslConfiguration?: SslConfiguration;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: AppTypeEnum;
}
