import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { VpcConfiguration } from "./vpcconfiguration";



export class AddApplicationVpcConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=VpcConfiguration" })
  vpcConfiguration: VpcConfiguration;
}
