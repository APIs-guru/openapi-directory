import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { ProductModel } from "./productmodel";
import { SettingDataModel } from "./settingdatamodel";


export class IntegrationLinkDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config?: ConfigModel;

  @Metadata({ data: "json, name=environment" })
  environment?: EnvironmentModel;

  @Metadata({ data: "json, name=product" })
  product?: ProductModel;

  @Metadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @Metadata({ data: "json, name=setting" })
  setting?: SettingDataModel;

  @Metadata({ data: "json, name=status" })
  status?: string;
}
