import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConfigModel } from "./configmodel";
import { EnvironmentModel } from "./environmentmodel";
import { ProductModel } from "./productmodel";
import { SettingDataModel } from "./settingdatamodel";



export class IntegrationLinkDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: ConfigModel;

  @SpeakeasyMetadata({ data: "json, name=environment" })
  environment?: EnvironmentModel;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: ProductModel;

  @SpeakeasyMetadata({ data: "json, name=readOnly" })
  readOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=setting" })
  setting?: SettingDataModel;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}
