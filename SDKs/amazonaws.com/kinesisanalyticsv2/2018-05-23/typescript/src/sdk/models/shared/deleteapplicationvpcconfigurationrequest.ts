import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteApplicationVpcConfigurationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ApplicationName" })
  applicationName: string;

  @SpeakeasyMetadata({ data: "json, name=ConditionalToken" })
  conditionalToken?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentApplicationVersionId" })
  currentApplicationVersionId?: number;

  @SpeakeasyMetadata({ data: "json, name=VpcConfigurationId" })
  vpcConfigurationId: string;
}
